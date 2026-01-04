 document.addEventListener("DOMContentLoaded", async () => {
  const clients = await getClients();
  const tbody = document.querySelector("tbody");

  if (!tbody) return;

  clients.forEach(client => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${client.id}</td>
      <td>${client.first_name} ${client.last_name}</td>
      <td>${client.email}</td>
      <td>
        <button>Details</button>
        <button>Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
});

