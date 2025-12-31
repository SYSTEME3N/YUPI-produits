const produits = [
    { id: 1, nom: "ALKA PLUS", prix: 16875, img: "https://i.imgur.com/uXMOb6K.jpeg", roles: [
        "Équilibre le pH de l'organisme et combat l'acidité", 
        "Améliore la digestion et apaise les brûlures d’estomac", 
        "Détoxifie le système lymphatique", 
        "Renforce la clarté mentale et l'énergie physique",
        "Soutient le métabolisme et réduit la fatigue chronique"
    ] },
    { id: 2, nom: "DÉTOX SANTÉ", prix: 16875, img: "https://i.imgur.com/uchBMrs.jpeg", roles: [
        "Purification profonde du sang et des organes", 
        "Nettoie efficacement le foie et les reins", 
        "Élimine les toxines accumulées et métaux lourds", 
        "Améliore l'éclat du teint et la santé de la peau",
        "Booste le renouvellement cellulaire"
    ] },
    { id: 3, nom: "IMMUNO BOOST", prix: 17500, img: "https://i.imgur.com/eHXzZbx.jpeg", roles: [
        "Fortifie intensément les défenses immunitaires", 
        "Protection naturelle contre les infections virales et bactériennes", 
        "Aide à la récupération après une maladie", 
        "Propriétés antioxydantes puissantes",
        "Soutient la santé respiratoire"
    ] },
    { id: 4, nom: "SEA BUCKTHORN JUICE", prix: 16875, img: "https://i.imgur.com/dCulCdA.jpeg", roles: [
        "Riche en Oméga 3, 6, 7 et 9 pour la santé cardiaque", 
        "Favorise la régénération de la peau et des muqueuses", 
        "Réduit les inflammations systémiques", 
        "Soutient la vision et la santé oculaire",
        "Aide au contrôle du cholestérol"
    ] },
    { id: 5, nom: "DIABO CARE SPRAY", prix: 6250, img: "https://i.imgur.com/zRZETBA.jpeg", roles: [
        "Régule naturellement le taux de glycémie dans le sang", 
        "Optimise le métabolisme du sucre et des glucides", 
        "Technologie sublinguale pour une absorption ultra-rapide", 
        "Réduit les envies de sucre (cravings)",
        "Aide à prévenir les complications liées au diabète"
    ] },
    { id: 6, nom: "COSTI AWAY POWDER", prix: 13125, img: "https://i.imgur.com/bTht3PR.jpeg", roles: [
        "Soulage la constipation chronique et occasionnelle", 
        "Réduit les ballonnements et l'accumulation de gaz", 
        "Régule le transit intestinal sans irriter le côlon", 
        "Favorise une flore intestinale saine",
        "Aide à l'élimination des déchets digestifs"
    ] },
    { id: 7, nom: "MEN POWER MALT", prix: 18750, img: "https://i.imgur.com/psVzO57.jpeg", roles: [
        "Augmente la force, la vitalité et l'endurance masculine", 
        "Améliore la performance physique et musculaire", 
        "Combat la fatigue sexuelle et nerveuse", 
        "Soutient l'équilibre hormonal masculin",
        "Source d'énergie durable pour les hommes actifs"
    ] },
    { id: 8, nom: "DENTAL DROP", prix: 2500, img: "https://i.imgur.com/bQzv3sk.jpeg", roles: [
        "Assainit les gencives et renforce l'émail dentaire", 
        "Combat la mauvaise haleine durablement", 
        "Prévient la plaque dentaire et les caries", 
        "Soulage les sensibilités dentaires",
        "Propriétés antibactériennes naturelles"
    ] },
    { id: 9, nom: "BAUME DOULEUR", prix: 2500, img: "https://i.imgur.com/DtFNIaI.jpeg", roles: [
        "Soulagement rapide des maux de tête et migraines", 
        "Apaise les courbatures et douleurs musculaires", 
        "Efficace contre les douleurs articulaires", 
        "Améliore la circulation locale",
        "Effet relaxant immédiat par aromathérapie"
    ] },
    { id: 10, nom: "MEN POWER OIL", prix: 6250, img: "https://i.postimg.cc/zf1qzbQK/men-power-oil-1.jpg", roles: [
        "Améliore la circulation sanguine pour des performances intimes optimales", 
        "Renforce la confiance et la puissance masculine", 
        "Action stimulante locale et naturelle", 
        "Soutient la santé des tissus masculins",
        "Formule ayurvédique sans effets secondaires"
    ] },
    { id: 11, nom: "WOMEN CARE TABLET", prix: 15750, img: "https://i.postimg.cc/sfJQtyvB/Whats-App-Image-2025-01-18-at-1-22-20-PM-4.jpg", roles: [
        "Équilibre le système hormonal féminin", 
        "Soulage les douleurs menstruelles et régule les cycles", 
        "Soutient la santé reproductive et le bien-être général", 
        "Combat les bouffées de chaleur (ménopause)",
        "Améliore la vitalité et l'humeur"
    ] },
    { id: 12, nom: "HERBAL TEA", prix: 11250, img: "https://i.postimg.cc/FsR5NgsZ/yupi-drink-coffee-1.png", roles: [
        "Favorise la digestion et détoxifie l'organisme", 
        "Améliore le métabolisme", 
        "Propriétés relaxantes et apaisantes", 
        "Renforce le système immunitaire",
        "Réduit le stress quotidien"
    ] },
    { id: 13, nom: "PILON CARE", prix: 15750, img: "https://i.postimg.cc/tgg2VDwm/Pilon-care.png", roles: [
        "Soutient et protège la santé de la prostate", 
        "Améliore le flux et le confort urinaire", 
        "Réduit les inflammations de la zone pelvienne", 
        "Prévient les troubles urinaires liés à l'âge",
        "Action drainante et purifiante"
    ] },
    { id: 14, nom: "ENERGY CAPSULE", prix: 13125, img: "https://i.postimg.cc/FsR5NgsZ/yupi-drink-coffee-1.png", roles: [
        "Augmente l'énergie et la concentration", 
        "Réduit la fatigue mentale et physique", 
        "Soutient la vitalité quotidienne", 
        "Améliore la performance sportive",
        "Favorise le bien-être général"
    ] },
    { id: 15, nom: "YUPI DRINK COFFEE", prix: 13125, img: "https://i.postimg.cc/FsR5NgsZ/yupi-drink-coffee-1.png", roles: [
        "Boisson énergisante naturelle aux extraits de plantes",
        "Stimule la concentration et la vigilance",
        "Réduit la fatigue physique et mentale",
        "Riche en antioxydants",
        "Alternative saine aux boissons caféinées classiques"
    ] }
];

// FONCTION CRUCIALE : Charger les produits une fois que le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-boutique');
    
    // Si la grille n'existe pas dans le HTML, on arrête pour éviter l'erreur
    if (!grid) {
        console.error("Erreur : L'élément avec l'ID 'grid-boutique' est introuvable dans votre HTML.");
        return;
    }

    // Vider la grille avant d'ajouter (évite les doublons)
    grid.innerHTML = "";

    produits.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.nom}" style="border-radius:10px; margin-bottom:10px; width:100%;">
                <h3 class="title">${p.nom}</h3>
                <div><button class="btn-info" onclick="voirRoles(${p.id})">RÔLES & BIENFAITS</button></div>
                <div class="price-box">${p.prix.toLocaleString()} XOF</div>
                <button class="btn-buy" onclick="ouvrirCommande(${p.id})">COMMANDER</button>
            </div>`;
    });
});
