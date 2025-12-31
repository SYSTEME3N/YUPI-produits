// Fonction pour ouvrir/fermer le menu mobile
function toggleSidebar() {
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Optionnel : fermer le menu si on clique sur l'overlay
document.getElementById('sidebar-overlay').addEventListener('click', toggleSidebar);
