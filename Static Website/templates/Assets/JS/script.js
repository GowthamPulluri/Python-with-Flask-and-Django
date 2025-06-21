function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const url = `https://script.google.com/macros/s/AKfycbz42PEwraNRnQRJjN5RNI-4pVUwVL4ko1RSFMQ6EBYrnDWxOafKm9pj7C4_Hd9icZqZ/exec?username=${username}&password=${password}`;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      if (data === "success") {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    });
}
