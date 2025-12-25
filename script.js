const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check localStorage on load
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    existingBtn.style.display = "block";
  }
};

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});
