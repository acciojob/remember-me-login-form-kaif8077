//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if credentials already exist in localStorage
window.addEventListener("load", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Handle form submission
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password");
    return;
  }

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show or hide existing user button
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Handle existing user login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
