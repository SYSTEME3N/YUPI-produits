const produits = [
    { id:1, nom:"ALKA PLUS", prix:16875, img:"https://i.imgur.com/uXMOb6K.jpeg", roles:[
        "Équilibre le pH de l'organisme et combat l'acidité",
        "Améliore la digestion et apaise les brûlures d’estomac",
        "Détoxifie le système lymphatique",
        "Renforce la clarté mentale et l'énergie physique",
        "Soutient le métabolisme et réduit la fatigue chronique"
    ] },
    { id:2, nom:"DÉTOX SANTÉ", prix:16875, img:"https://i.imgur.com/uchBMrs.jpeg", roles:[
        "Purification profonde du sang et des organes",
        "Nettoie efficacement le foie et les reins",
        "Élimine les toxines accumulées et métaux lourds",
        "Améliore l'éclat du teint et la santé de la peau",
        "Booste le renouvellement cellulaire"
    ] },
    // ... ajouter les autres produits comme avant
];

let panier = [];
let tempQty = 1;

function chargerBoutique() {
    const grid = document.getElementById('grid-boutique');
    produits.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}" style="border-radius:10px; margin-bottom:10px;">
                <h3 class="title">${p.nom}</h3>
                <div><button class="btn-info" onclick="voirRoles(${p.id})">RÔLES & BIENFAITS</button></div>
                <div class="price-box">${p.prix.toLocaleString()} XOF</div>
                <button class="btn-buy" onclick="ouvrirCommande(${p.id})">COMMANDER</button>
            </div>`;
    });
}

function voirRoles(id) {
    const p = produits.find(x=>x.id===id);
    document.getElementById('roleTitle').innerText = p.nom;
    document.getElementById('roleBody').innerHTML = '<ul>'+p.roles.map(r=>`<li>${r}</li>`).join('')+'</ul>';
    document.getElementById('modalRoles').style.display='flex';
}

function ouvrirCommande(id) {
    const p = produits.find(x=>x.id===id);
    tempQty=1; document.getElementById('qty-val').innerText=tempQty;
    document.getElementById('qtyProdName').innerText=p.nom;
    document.getElementById('confirmAddBtn').onclick=()=>{ajouterPanier(p,tempQty); fermerModals();};
    document.getElementById('modalQty').style.display='flex';
}

function changeQtyVal(d){ tempQty=Math.max(1,tempQty+d); document.getElementById('qty-val').innerText=tempQty; }

function ajouterPanier(p,q){
    const ex=panier.find(i=>i.id===p.id);
    if(ex) ex.qty+=q; else panier.push({...p,qty:q});
    majUI();
}

function majUI(){
    const count=panier.reduce((a,b)=>a+b.qty,0);
    const total=panier.reduce((a,b)=>a+(b.prix*b.qty),0);
    document.getElementById('cart-count').innerText=count;
    document.getElementById('cart-total').innerText=total.toLocaleString();
    document.getElementById('yupi-cart-status').style.display=count>0?'block':'none';
}

function ouvrirRecapPanier(){
    const body=document.getElementById('cartListBody');
    body.innerHTML=panier.map(item=>`
        <div style="display:flex; justify-content:space-between; align-items:center; background:#1a1a1a; margin-bottom:5px; padding:8px; border-radius:8px; font-size:0.8rem;">
            <div>
                <div style="font-weight:bold;">${item.nom}</div>
                <div style="color:#fde047;">${(item.prix*item.qty).toLocaleString()} XOF</div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button class="q-btn" onclick="updateCartQty(${item.id},-1)">-</button>
                <span>${item.qty}</span>
                <button class="q-btn" onclick="updateCartQty(${item.id},1)">+</button>
                <span onclick="retirer(${item.id})" style="color:red; cursor:pointer;">🗑</span>
            </div>
        </div>`).join('');
    document.getElementById('recapTotal').innerText=panier.reduce((a,b)=>a+(b.prix*b.qty),0).toLocaleString();
    document.getElementById('modalCart').style.display='flex';
}

function updateCartQty(id,d){ const p=panier.find(x=>x.id===id); p.qty=Math.max(1,p.qty+d); majUI(); ouvrirRecapPanier(); }
function retirer(id){ panier=panier.filter(x=>x.id!==id); majUI(); panier.length===0?fermerModals():ouvrirRecapPanier(); }

function envoyerPanierWhatsApp(){
    let t="Bonjour YUPI GLOBAL ! Voici ma commande :\n\n";
    panier.forEach(i=>t+=`✅ ${i.nom} (x${i.qty}) : ${i.prix*i.qty} XOF\n`);
    t+=`\nTOTAL : ${panier.reduce((a,b)=>a+(b.prix*b.qty),0).toLocaleString()} XOF`;
    window.open("https://wa.me/2290143718055?text="+encodeURIComponent(t),"_blank");
    panier=[]; majUI(); fermerModals();
}

function fermerModals(){
    document.getElementById('modalRoles').style.display='none';
    document.getElementById('modalQty').style.display='none';
    document.getElementById('modalCart').style.display='none';
}

chargerBoutique();
