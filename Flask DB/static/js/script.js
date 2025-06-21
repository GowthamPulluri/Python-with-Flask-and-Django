window.onload = function () {
  fetchUsers();
};
function fetchUsers() {
  fetch("/users")
    .then(response => response.json())
    .then(data => {
      const userList = document.getElementById("user-list");
      userList.innerHTML = "";
      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
      });
    })
    .catch(error => console.error("Error fetching users:", error));
}
function createUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Please enter both name and email.");
    return;
  }
  fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name, email: email })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      fetchUsers();
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    })
    .catch(error => console.error("Error creating user:", error));
}