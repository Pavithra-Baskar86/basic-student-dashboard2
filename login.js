const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

// Simple fixed credentials
const USERNAME = "MGR College";
const PASSWORD = "111";

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === USERNAME && password === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    loginError.textContent = "Invalid credentials!";
  }
});

// Auto-redirect if already logged in
if (localStorage.getItem("loggedIn") === "true") {
  window.location.href = "dashboard.html";
}