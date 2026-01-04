// CRUD générique pour toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    // Gestion modals CRUD
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    });
});

