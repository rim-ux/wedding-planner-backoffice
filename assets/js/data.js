// DATA.JS - Toutes les données du projet
const DATA = {
    clients: [
        { id: 1, nom: "Sarah El Amrani", partenaire: "Ahmed", email: "sarah@email.com", tel: "+212612345678", dateMariage: "2026-08-15", budget: 350000, statut: "actif" },
        { id: 2, nom: "Fatima Bennani", partenaire: "Youssef", email: "fatima@email.com", tel: "+212698765432", dateMariage: "2026-06-20", budget: 280000, statut: "attente" },
        { id: 3, nom: "Amina Alaoui", partenaire: "Mehdi", email: "amina@email.com", tel: "+212655443322", dateMariage: "2026-09-10", budget: 420000, statut: "actif" },
        { id: 4, nom: "Leila Idrissi", partenaire: "Omar", email: "leila@email.com", tel: "+212677889900", dateMariage: "2026-07-25", budget: 310000, statut: "actif" },
        { id: 5, nom: "Zineb Tazi", partenaire: "Karim", email: "zineb@email.com", tel: "+212644556677", dateMariage: "2026-05-18", budget: 190000, statut: "annule" }
    ],
    
    mariages: [
        { id: 1, couple: "Sarah & Ahmed", date: "2026-08-15", lieu: "Palais Soleiman, Fès", invites: 250, budget: 350000, statut: "confirme" },
        { id: 2, couple: "Fatima & Youssef", date: "2026-06-20", lieu: "Villa des Arts, Casablanca", invites: 180, budget: 280000, statut: "attente" },
        { id: 3, couple: "Amina & Mehdi", date: "2026-09-10", lieu: "Riad Azahra, Marrakech", invites: 300, budget: 420000, statut: "confirme" },
        { id: 4, couple: "Leila & Omar", date: "2026-07-25", lieu: "Jardin Majorelle, Marrakech", invites: 200, budget: 310000, statut: "confirme" },
        { id: 5, couple: "Zineb & Karim", date: "2026-05-18", lieu: "La Mamounia, Marrakech", invites: 150, budget: 190000, statut: "annule" }
    ],
    
    prestataires: [
        { id: 1, nom: "Fleurs d'Orient", specialite: "Décoration Florale", contact: "+212522112233", tarif: "15 000 MAD", ville: "Casablanca" },
        { id: 2, nom: "Traiteur Royal", specialite: "Gastronomie", contact: "+212522445566", tarif: "350 MAD/pers", ville: "Rabat" },
        { id: 3, nom: "Photo Dreams", specialite: "Photographie", contact: "+212677889900", tarif: "12 000 MAD", ville: "Marrakech" },
        { id: 4, nom: "DJ Events", specialite: "Animation Musicale", contact: "+212644556677", tarif: "8 000 MAD", ville: "Casablanca" },
        { id: 5, nom: "Pâtisserie Royale", specialite: "Wedding Cake", contact: "+212533445566", tarif: "4 500 MAD", ville: "Fès" }
    ],
    
    paiements: [
        { id: 1, client: "Sarah & Ahmed", montant: 175000, date: "2026-01-05", methode: "Virement", statut: "paye" },
        { id: 2, client: "Fatima & Youssef", montant: 140000, date: "2026-01-08", methode: "Chèque", statut: "attente" },
        { id: 3, client: "Amina & Mehdi", montant: 210000, date: "2026-01-10", methode: "Virement", statut: "paye" },
        { id: 4, client: "Leila & Omar", montant: 155000, date: "2026-01-12", methode: "Espèces", statut: "paye" },
        { id: 5, client: "Zineb & Karim", montant: 95000, date: "2026-01-15", methode: "Chèque", statut: "annule" }
    ],
    
    messages: [
        { id: 1, expediteur: "Sarah El Amrani", sujet: "Question sur le menu", date: "2026-01-10", statut: "non-lu" },
        { id: 2, expediteur: "Fatima Bennani", sujet: "Demande de modification", date: "2026-01-09", statut: "lu" },
        { id: 3, expediteur: "Amina Alaoui", sujet: "Confirmation des prestataires", date: "2026-01-08", statut: "lu" },
        { id: 4, expediteur: "Leila Idrissi", sujet: "Planning de la journée", date: "2026-01-07", statut: "lu" },
        { id: 5, expediteur: "Zineb Tazi", sujet: "Demande de remboursement", date: "2026-01-06", statut: "non-lu" }
    ]
};

// Sauvegarder dans localStorage
if (!localStorage.getItem('goldenpromise_data')) {
    localStorage.setItem('goldenpromise_data', JSON.stringify(DATA));
}
