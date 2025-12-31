const produits = [
    { 
        id: 1, 
        nom: "ALKA PLUS", 
        prix: 16875, 
        img: "https://i.imgur.com/uXMOb6K.jpeg", 
        description: "Solution complète pour équilibrer l'acidité corporelle. Idéal contre les brûlures d'estomac, les reflux gastriques et la fatigue chronique liée au stress.",
        roles: ["Régule le pH", "Améliore la digestion", "Détoxifie la lymphe", "Clarté mentale"]
    },
    { 
        id: 2, 
        nom: "DÉTOX SANTÉ", 
        prix: 16875, 
        img: "https://i.imgur.com/uchBMrs.jpeg", 
        description: "Un nettoyant puissant pour votre foie et vos reins. Élimine les toxines accumulées par l'alimentation moderne et l'alcool.",
        roles: ["Purifie le sang", "Nettoyage hépatique", "Éclat de la peau", "Élimine métaux lourds"]
    },
    { 
        id: 3, 
        nom: "IMMUNO BOOST", 
        prix: 17500, 
        img: "https://i.imgur.com/eHXzZbx.jpeg", 
        description: "Bouclier naturel contre les virus et infections. Recommandé pour les personnes souvent malades ou en convalescence.",
        roles: ["Renforce l'immunité", "Antioxydant", "Énergie durable", "Protection virale"]
    }
    // Ajoutez les autres produits ici avec le même format...
];

let panier = [];

// Chargement boutique
function chargerBoutique() {
    const grid = document.getElementById('grid-boutique');
    grid.innerHTML = produits.map(p => `
        <div class="card">
            <img src="${p.img}" style="width:100%; border-radius:10px;">
            <h3>${p.nom}</h3>
            <p class="price-box">${p.prix.toLocaleString()} XOF</p>
            <button class="btn-info" onclick="showDetails(${p.id})">EN SAVOIR PLUS</button>
        </div>
    `).join('');
}

// Page de détails (Ouvre une "nouvelle" page)
function showDetails(id) {
    const p = produits.find(x => x.id === id);
    const detailContent = document.getElementById('detail-content');
    
    detailContent.innerHTML = `
        <div class="detail-container" style="display:flex; gap:40px; flex-wrap:wrap; margin-top:30px;">
            <img src="${p.img}" style="max-width:400px; border-radius:15px; box-shadow: 0 0 20px var(--accent);">
            <div style="flex:1; min-width:300px;">
                <h2 style="color:var(--accent); font-size:2rem;">${p.nom}</h2>
                <p style="font-size:1.1rem; line-height:1.6; color:#ccc;">${p.description}</p>
                <h3>Bienfaits majeurs :</h3>
                <ul style="color:#fde047; list-style: circle; padding-left:20px;">
                    ${p.roles.map(r => `<li>${r}</li>`).join('')}
                </ul>
                <div class="price-box" style="font-size:1.5rem; margin:20px 0;">${p.prix.toLocaleString()} XOF</div>
                <div style="display:flex; gap:15px; align-items:center;">
                    <input type="number" id="qty-${p.id}" value="1" min="1" style="width:60px; padding:10px; border-radius:5px;">
                    <button onclick="ajouterAuPanier(${p.id})" class="btn-buy" style="background:#FF4500; color:white; padding:12px 25px; border-radius:50px; border:none; cursor:pointer; font-weight:bold;">AJOUTER AU PANIER</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('product-detail-page').classList.remove('hidden');
}

function hideDetails() {
    document.getElementById('product-detail-page').classList.add('hidden');
}

// Gestion Panier
function ajouterAuPanier(id) {
    const p = produits.find(x => x.id === id);
    const qty = parseInt(document.getElementById(`qty-${id}`).value);
    
    const existant = panier.find(item => item.id === id);
    if(existant) existant.qty += qty;
    else panier.push({...p, qty: qty});
    
    updateCartUI();
    hideDetails();
    toggleCart(); // Affiche le panier
}

function updateCartUI() {
    const count = panier.reduce((a, b) => a + b.qty, 0);
    const total = panier.reduce((a, b) => a + (b.prix * b.qty), 0);
    
    document.getElementById('cart-count').innerText = count;
    document.getElementById('cart-total').innerText = total.toLocaleString();
    
    document.getElementById('cart-items').innerHTML = panier.map(item => `
        <div style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:10px 0;">
            <span>${item.nom} (x${item.qty})</span>
            <span>${(item.prix * item.qty).toLocaleString()} XOF</span>
        </div>
    `).join('');
}

function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('nav-links').style.display = 
        document.getElementById('nav-links').style.display === 'flex' ? 'none' : 'flex';
}

function envoyerPanierWhatsApp() {
    let message = "Bonjour YUPI GLOBAL, je souhaite commander :\n\n";
    panier.forEach(i => message += `• ${i.nom} (x${i.qty})\n`);
    message += `\nTotal : ${document.getElementById('cart-total').innerText} XOF`;
    window.open(`https://wa.me/2290143718055?text=${encodeURIComponent(message)}`, "_blank");
}

chargerBoutique();
