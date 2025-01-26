async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    console.log(users.name);

    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((users) => {
      userList.innerHTML = `<li>${users.name}</li>`;
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    console.error("Failed to load user data.", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
