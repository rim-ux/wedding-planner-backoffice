document.addEventListener("DOMContentLoaded", async () => {
  const clients = await getClients(); // récupère les clients depuis l'API
  const tbody = document.querySelector("tbody");

  if (!tbody) return;

  clients.forEach(client => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${client.id}</td>
      <td>${client.first_name} ${client.last_name}</td>
      <td>${client.email}</td>
      <!-- Actions supprimées -->
    `;

    tbody.appendChild(row);
  });
});


