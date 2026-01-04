// API Golden Promise - Données wedding planner
let DATA = localStorage.getItem('goldenPromiseData') ? 
    JSON.parse(localStorage.getItem('goldenPromiseData')) : {
    clients: [
        { first_name: "Sarah", last_name: "Ahmed", email: "sarah@email.com", phone: "+212600123456", weddingDate: "2026-06-15" },
        { first_name: "Fatima", last_name: "Karim", email: "fatima@email.com", phone: "+212600234567", weddingDate: "2026-08-20" },
        { first_name: "Leila", last_name: "Youssef", email: "leila@email.com", phone: "+212600345678", weddingDate: "2026-09-10" }
    ],
    services: [
        { name: "Organisation complète", description: "Prise en charge totale du mariage", price: 8000, duration: "6 mois" },
        { name: "Coordination jour J", description: "Gestion le jour du mariage", price: 2500, duration: "1 jour" }
    ],
    payments: [
        { client: "Sarah Ahmed", date: "2026-01-02", amount: 5000, method: "Virement", status: "Validé" }
    ],
    vendors: [
        { name: "Traiteur Royal", category: "Traiteur", email: "royal@email.com", phone: "+212612345678", rate: 5000 },
        { name: "Photo Pro", category: "Photographe", email: "photo@email.com", phone: "+212623456789", rate: 1800 }
    ],
    weddings: [
        { couple: "Sarah & Ahmed", date: "2026-06-15", venue: "Hôtel Sofitel", budget: 15000, status: "Confirmé" }
    ]
};

// API Functions
async function getClients() { saveData(); return DATA.clients; }
async function getServices() { saveData(); return DATA.services; }
async function getPayments() { saveData(); return DATA.payments; }
async function getVendors() { saveData(); return DATA.vendors; }
async function getWeddings() { saveData(); return DATA.weddings; }

function saveData() {
    localStorage.setItem('goldenPromiseData', JSON.stringify(DATA));
}
