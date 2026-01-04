 // API CLIENTS
async function getClients() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
}

