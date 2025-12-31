const app = document.getElementById("app");
document.getElementById("year").textContent = new Date().getFullYear();

const site = {
  author: "Eric Barbeau",
  whatsapp: "2290143718055",
  email: "erickpapko384@gmail.com",
  description: "Expert en marketing digital, nous transformons votre présence en ligne en machine à capturer des clients."
};

const articles = [
  {
    id: "visibilite",
    title: "Booster sa visibilité en ligne en 2025",
    image: "https://i.postimg.cc/1zB7Qvqj/Booter-20251211-203126-0000.png",
    content: "La visibilité n'est pas un luxe, c'est une nécessité. En 2025, l'algorithme privilégie l'authenticité et la vidéo courte. Pour réussir, vous devez concentrer vos efforts sur le SEO local et la publicité ciblée."
  },
  {
    id: "boutique",
    title: "Vendre ses produits en automatique",
    image: "https://i.postimg.cc/dVBgsQMW/Les-tendances-actuelles-en-matiere-de-20251212-070445-0000.png",
    content: "Une page de vente n'est pas une simple vitrine, c'est un vendeur qui travaille 24h/24. Nous analysons ici les tunnels de conversion les plus rentables du moment."
  },
  {
    id: "facebook-ads",
    title: "Le guide ultime Facebook Ads",
    image: "https://i.postimg.cc/V6b7CmT5/FORMATION-2026-20251229-150847-0000.png",
    content: "Arrêtez de brûler votre budget publicitaire. Apprenez à cibler les audiences 'chaudes' et à créer des visuels qui stoppent le scroll."
  }
];

function renderArticles() {
  app.innerHTML = `
    <h2 style="font-size: 32px; margin-bottom: 10px;">Nos derniers conseils</h2>
    <p style="color: var(--text-dim); margin-bottom: 30px;">Stratégies exclusives pour Digital Web</p>
    <div class="grid">
      ${articles.map(a => `
        <div class="card">
          <img src="${a.image}" alt="${a.title}">
          <div class="content">
            <h3>${a.title}</h3>
            <button class="btn-read" onclick="goArticle('${a.id}')">Lire l'article</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderArticle(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return goArticles();

  app.innerHTML = `
    <div class="article-view">
      <button onclick="goArticles()" style="background:none; border:none; color:var(--primary); cursor:pointer; padding:0; margin-bottom:20px;">← Retour aux articles</button>
      <h1>${a.title}</h1>
      <p class="meta">Publié par ${site.author} • 5 min de lecture</p>
      <img src="${a.image}" class="article-img">
      <div style="font-size: 18px; color: var(--text-dim); max-width: 700px;">
        <p>${a.content}</p>
      </div>
      <div style="margin-top: 40px; padding: 20px; border-top: 1px solid var(--border);">
        <button class="btn-wa" onclick="shareWhatsApp('${a.title}')">Partager sur WhatsApp</button>
      </div>
    </div>
  `;
}

function renderContact() {
  app.innerHTML = `
    <div class="contact-card">
      <h2>Travaillons ensemble</h2>
      <p style="color: var(--text-dim); max-width: 500px; margin: 20px auto;">${site.description}</p>
      <div style="margin: 30px 0;">
        <p><strong>Email :</strong> ${site.email}</p>
        <p><strong>WhatsApp :</strong> +${site.whatsapp}</p>
      </div>
      <a class="btn-wa" href="https://wa.me/${site.whatsapp}" target="_blank" style="display:inline-block; text-decoration:none;">Démarrer un projet</a>
    </div>
  `;
}

// Fonctions de Navigation
function goArticle(id) { window.scrollTo(0,0); location.hash = `article/${id}`; }
function goArticles() { location.hash = "articles"; }
function shareWhatsApp(title) {
  const url = window.location.href;
  window.open(`https://wa.me/?text=Lisez cet article de Digital Web : ${title} -> ${url}`, "_blank");
}

function router() {
  const hash = location.hash.replace("#", "") || "articles";
  if (hash === "articles") renderArticles();
  else if (hash === "contact") renderContact();
  else if (hash.startsWith("article/")) renderArticle(hash.split("/")[1]);
}

window.addEventListener("hashchange", router);
router();
