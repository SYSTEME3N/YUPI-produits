// BASE DE DONNÉES DES 15 PRODUITS YUPI GLOBAL
const produits = [
    { 
        id: 1, nom: "ALKA PLUS", prix: 16875, img: "https://i.imgur.com/uXMOb6K.jpeg", 
        description: "Un puissant régulateur de pH. L'acidité est la porte d'entrée de nombreuses maladies. Ce produit aide à alcaliniser le corps, essentiel pour combattre les inflammations chroniques et les reflux gastriques.",
        roles: ["Combat l'acidité urinaire", "Soulage les ulcères d'estomac", "Réduit les douleurs articulaires", "Détoxifie le système lymphatique"]
    },
    { 
        id: 2, nom: "DÉTOX SANTÉ", prix: 16875, img: "https://i.imgur.com/uchBMrs.jpeg", 
        description: "Nettoyage complet des filtres du corps (Foie et Reins). Idéal pour ceux qui consomment beaucoup de produits transformés, de médicaments ou d'alcool.",
        roles: ["Purifie le sang", "Régénère les cellules hépatiques", "Élimine les métaux lourds", "Éclaircit le teint naturellement"]
    },
    { 
        id: 3, nom: "IMMUNO BOOST", prix: 17500, img: "https://i.imgur.com/eHXzZbx.jpeg", 
        description: "Renforce votre bouclier naturel. Recommandé en cas de fatigue générale, de maladies récurrentes (grippes, infections) ou pour soutenir le corps face aux agressions extérieures.",
        roles: ["Stimule les globules blancs", "Antioxydant puissant", "Récupération après convalescence", "Soutien respiratoire"]
    },
    { 
        id: 4, nom: "SEA BUCKTHORN JUICE", prix: 16875, img: "https://i.imgur.com/dCulCdA.jpeg", 
        description: "La 'baie miracle'. Riche en Oméga 3, 6, 7 et 9. Excellent pour la santé cardiovasculaire et la réparation des tissus internes.",
        roles: ["Santé du cœur", "Répare les muqueuses", "Combat la sécheresse oculaire", "Anti-âge cellulaire"]
    },
    { 
        id: 5, nom: "DIABO CARE SPRAY", prix: 6250, img: "https://i.imgur.com/zRZETBA.jpeg", 
        description: "Soutien majeur pour les diabétiques. Ce spray sublingual aide à stabiliser le taux de sucre et à réduire les envies de grignotage sucré.",
        roles: ["Régule la glycémie", "Active l'insuline naturelle", "Réduit la fatigue liée au sucre", "Absorption rapide"]
    },
    { 
        id: 6, nom: "COSTI AWAY POWDER", prix: 13125, img: "https://i.imgur.com/bTht3PR.jpeg", 
        description: "Libérez votre système digestif. La constipation est la mère de nombreuses maladies. Cette poudre régule le transit sans douleur.",
        roles: ["Contre la constipation chronique", "Élimine les ballonnements", "Nettoie le côlon", "Aide à la perte de poids"]
    },
    { 
        id: 7, nom: "MEN POWER MALT", prix: 18750, img: "https://i.imgur.com/psVzO57.jpeg", 
        description: "Énergie et Force Masculine. Un tonique revitalisant pour les hommes souffrant de fatigue physique, de manque de libido ou de faiblesse musculaire.",
        roles: ["Endurance physique", "Vigueur masculine", "Réduit le stress nerveux", "Performance musculaire"]
    },
    { 
        id: 8, nom: "DENTAL DROP", prix: 2500, img: "https://i.imgur.com/bQzv3sk.jpeg", 
        description: "Hygiène buccale ayurvédique. Pour des dents fortes et des gencives saines. Combat les bactéries responsables des caries.",
        roles: ["Contre la mauvaise haleine", "Saigne des gencives", "Prévient le tartre", "Dents sensibles"]
    },
    { 
        id: 9, nom: "BAUME DOULEUR", prix: 2500, img: "https://i.imgur.com/DtFNIaI.jpeg", 
        description: "Soulagement immédiat. Un mélange d'huiles essentielles pour calmer les douleurs localisées.",
        roles: ["Maux de tête / Migraines", "Douleurs cervicales", "Congestion nasale (rhume)", "Douleurs musculaires"]
    },
    { 
        id: 10, nom: "MEN POWER OIL", prix: 6250, img: "https://i.postimg.cc/zf1qzbQK/men-power-oil-1.jpg", 
        description: "Huile de massage stimulante pour homme. Améliore la circulation sanguine locale et la vitalité des tissus.",
        roles: ["Circulation sanguine", "Tonus local", "100% Naturel", "Sans effets secondaires"]
    },
    { 
        id: 11, nom: "WOMEN CARE TABLET", prix: 15750, img: "https://i.postimg.cc/sfJQtyvB/Whats-App-Image-2025-01-18-at-1-22-20-PM-4.jpg", 
        description: "L'allié de la femme. Aide à réguler les cycles hormonaux et soulage les désagréments liés à la ménopause ou aux règles douloureuses.",
        roles: ["Équilibre hormonal", "Règles douloureuses", "Soutien fertilité", "Bien-être émotionnel"]
    },
    { 
        id: 12, nom: "HERBAL TEA", prix: 11250, img: "https://i.postimg.cc/FsR5NgsZ/yupi-drink-coffee-1.png", 
        description: "Thé thérapeutique pour une détente profonde et une détoxification douce quotidienne.",
        roles: ["Relaxation", "Digestion légère", "Élimination des graisses", "Sommeil réparateur"]
    },
    { 
        id: 13, nom: "PILON CARE", prix: 15750, img: "https://i.postimg.cc/tgg2VDwm/Pilon-care.png", 
        description: "Protection de la prostate. Essentiel pour les hommes à partir de 40 ans pour maintenir un confort urinaire optimal.",
        roles: ["Santé de la prostate", "Confort urinaire", "Réduit les mictions nocturnes", "Anti-inflammatoire"]
    },
    { 
        id: 14, nom: "ENERGY CAPSULE", prix: 13125, img: "https://i.postimg.cc/FsR5NgsZ/yupi-drink-coffee-1.png", 
        description: "Concentré d'énergie pure. Pour les étudiants, les sportifs et les professionnels ayant des journées chargées.",
        roles: ["Vigilance mentale", "Endurance", "Réduit la fatigue", "Récupération rapide"]
    },
    { 
        id: 15, nom: "YUPI DRINK COFFEE", prix: 13125, img: "https://i.postimg.cc/FsR5NgsZ/yupi-drink-coffee-1.png", 
        description: "Bien plus qu'un café. Une boisson santé enrichie aux extraits de plantes pour stimuler le corps sans l'énerver.",
        roles: ["Énergie sans tremblements", "Riche en antioxydants", "Brûle-graisse naturel", "Focus amélioré"]
    }
];

let panier = [];

// CHARGEMENT INITIAL
document.addEventListener('DOMContentLoaded', () => {
    chargerBoutique();
});

function chargerBoutique() {
    const grid = document.getElementById('grid-boutique');
    if(!grid) return;
    
    grid.innerHTML = produits.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.nom}">
            <h3 class="title">${p.nom}</h3>
            <div class="price-box">${p.prix.toLocaleString()} XOF</div>
            <button class="btn-info" onclick="showDetails(${p.id})">EN SAVOIR PLUS</button>
        </div>
    `).join('');
}

// NAVIGATION VERS LES DÉTAILS
window.showDetails = function(id) {
    const p = produits.find(x => x.id === id);
    const detailPage = document.getElementById('product-detail-page');
    const detailContent = document.getElementById('detail-content');
    
    detailContent.innerHTML = `
        <div class="product-view">
            <div class="image-section">
                <img src="${p.img}" alt="${p.nom}" style="width:100%; border-radius:15px;">
            </div>
            <div class="info-section">
                <h1 style="color:var(--accent);">${p.nom}</h1>
                <p class="desc-text">${p.description}</p>
                <h3>Pourquoi l'utiliser ?</h3>
                <ul class="benefits-list">
                    ${p.roles.map(r => `<li><i class="fas fa-check-circle"></i> ${r}</li>`).join('')}
                </ul>
                <div class="purchase-area">
                    <span class="detail-price">${p.prix.toLocaleString()} XOF</span>
                    <div class="qty-control">
                        <button onclick="changeQty(-1)">-</button>
                        <input type="number" id="buy-qty" value="1" min="1">
                        <button onclick="changeQty(1)">+</button>
                    </div>
                    <button class="btn-buy-now" onclick="ajouterAuPanier(${p.id})">AJOUTER AU PANIER</button>
                </div>
            </div>
        </div>
    `;
    detailPage.classList.remove('hidden');
    window.scrollTo(0,0);
};

window.hideDetails = function() {
    document.getElementById('product-detail-page').classList.add('hidden');
};

// LOGIQUE PANIER
window.changeQty = function(val) {
    let input = document.getElementById('buy-qty');
    input.value = Math.max(1, parseInt(input.value) + val);
};

window.ajouterAuPanier = function(id) {
    const p = produits.find(x => x.id === id);
    const qty = parseInt(document.getElementById('buy-qty').value);
    
    const index = panier.findIndex(item => item.id === id);
    if(index > -1) {
        panier[index].qty += qty;
    } else {
        panier.push({...p, qty: qty});
    }
    
    updateCartUI();
    hideDetails();
    toggleCart(true); // Ouvre le panier pour montrer l'ajout
};

function updateCartUI() {
    const count = panier.reduce((a, b) => a + b.qty, 0);
    const total = panier.reduce((a, b) => a + (b.prix * b.qty), 0);
    
    document.getElementById('cart-count').innerText = count;
    document.getElementById('cart-total').innerText = total.toLocaleString();
    
    const itemsContainer = document.getElementById('cart-items');
    itemsContainer.innerHTML = panier.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.nom}</strong><br>
                <small>${item.qty} x ${item.prix.toLocaleString()} XOF</small>
            </div>
            <button onclick="supprimerItem(${item.id})" class="del-btn">🗑️</button>
        </div>
    `).join('');
}

window.supprimerItem = function(id) {
    panier = panier.filter(item => item.id !== id);
    updateCartUI();
};

window.toggleCart = function(forceOpen = false) {
    const cart = document.getElementById('side-cart');
    if(forceOpen) cart.classList.add('active');
    else cart.classList.toggle('active');
};

window.envoyerPanierWhatsApp = function() {
    if(panier.length === 0) return alert("Votre panier est vide !");
    
    let message = "📦 *NOUVELLE COMMANDE YUPI GLOBAL*\n\n";
    panier.forEach(i => {
        message += `✅ *${i.nom}*\n   Quantité : ${i.qty}\n   Prix : ${i.prix * i.qty} XOF\n\n`;
    });
    message += `💰 *TOTAL : ${document.getElementById('cart-total').innerText} XOF*`;
    
    window.open(`https://wa.me/2290143718055?text=${encodeURIComponent(message)}`, "_blank");
};
