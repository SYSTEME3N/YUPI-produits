const app = document.getElementById("app");
document.getElementById("year").textContent = new Date().getFullYear();

const site = {
  author: "Eric Barbeau",
  whatsapp: "2290143718055",
  email: "erickpapko384@gmail.com",
  description: `Digital Web est une entreprise spécialisée dans le marketing digital et les solutions numériques.
  Nous accompagnons entrepreneurs et entreprises dans la création de sites web professionnels, pages de vente,
  tunnels de conversion et stratégies publicitaires performantes.`
};

const articles = [
  {
    id: "visibilite",
    title: "Booster sa visibilité en ligne",
    image: "https://i.postimg.cc/1zB7Qvqj/Booter-20251211-203126-0000.png",
    content: `Découvrez comment augmenter votre visibilité grâce à des stratégies de contenu,
    de publicité ciblée et une présence digitale cohérente.`
  },
  {
    id: "boutique",
    title: "Boutique numérique & page de vente",
    image: "https://i.postimg.cc/dVBgsQMW/Les-tendances-actuelles-en-matiere-de-20251212-070445-0000.png",
    content: `Apprenez à créer une boutique numérique efficace et des pages de vente
    optimisées pour convertir vos visiteurs en clients.`
  },
  {
    id: "facebook-ads",
    title: "Formation Facebook Ads",
    image: "https://i.postimg.cc/V6b7CmT5/FORMATION-2026-20251229-150847-0000.png",
    content: `Maîtrisez Facebook Ads pour attirer des prospects qualifiés et
    augmenter vos ventes grâce à des campagnes performantes.`
  }
];

function renderArticles() {
  app.innerHTML = `
    <section>
      <h2>Articles</h2>
      <div class="grid">
        ${articles.map(a => `
          <div class="card">
            <img src="${a.image}" alt="${a.title}">
            <div class="content">
              <h3>${a.title}</h3>
              <button onclick="goArticle('${a.id}')">Lire l’article</button>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArticle(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return renderArticles();
  const shareLink = encodeURIComponent(location.href);
  const shareText = encodeURIComponent(a.title + " — Digital Web");
  app.innerHTML = `
    <article class="article">
      <h2>${a.title}</h2>
      <p class="meta">Auteur : ${site.author}</p>
      <img src="${a.image}" alt="${a.title}">
      <p>${a.content}</p>
      <div class="actions">
        <button onclick="shareWhatsApp('${shareText}','${shareLink}')">Partager WhatsApp</button>
        <button onclick="goArticles()">Retour</button>
      </div>
    </article>
  `;
}

function renderContact() {
  app.innerHTML = `
    <section class="contact">
      <h2>Contact</h2>
      <p>${site.description}</p>
      <p><strong>WhatsApp :</strong> ${site.whatsapp}</p>
      <p><strong>Email :</strong> ${site.email}</p>
      <a class="whatsapp" href="https://wa.me/${site.whatsapp}" target="_blank">Contacter sur WhatsApp</a>
    </section>
  `;
}

function shareWhatsApp(text, link) {
  window.open(`https://wa.me/?text=${text}%0A${link}`, "_blank");
}

function goArticle(id){ location.hash = `article/${id}`; }
function goArticles(){ location.hash = "articles"; }

function router() {
  const hash = location.hash.replace("#","") || "articles";
  if (hash === "articles") renderArticles();
  else if (hash === "contact") renderContact();
  else if (hash.startsWith("article/")) renderArticle(hash.split("/")[1]);
  else renderArticles();
}

window.addEventListener("hashchange", router);
router();
