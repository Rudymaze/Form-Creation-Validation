async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");

  dataContainer.innerHTML = "";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
}

console.log(fetchUserData());
