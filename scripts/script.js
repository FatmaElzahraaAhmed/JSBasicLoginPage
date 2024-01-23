document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    removeMessages();

    if (validateInputs(username, password)) {
      showSuccessMessage("Welcome! Form submitted.");
    }
  });

function validateInputs(username, password) {
  if (username == "") {
    showErrorMessage("Please Enter Your Email.");
    return false;
  }
  if (password == "") {
    showErrorMessage("Please Enter Your Password.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    showErrorMessage("Invalid email format.");
    return false;
  }

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    showErrorMessage(
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit."
    );
    return false;
  }

  return true;
}

function showErrorMessage(message) {
  var messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.style.color = "red";
  messageElement.style.paddingTop = "15px";
  messageElement.style.fontWeight = "500";
  messageElement.style.textAlign = "center";
  messageElement.classList.add("login-message");

  var form = document.querySelector(".form");
  form.appendChild(messageElement);
}

function showSuccessMessage(message) {
  var messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.style.color = "#00b242";
  messageElement.style.paddingTop = "20px";
  messageElement.style.fontWeight = "600";
  messageElement.classList.add("login-message");

  var form = document.querySelector(".form");
  form.appendChild(messageElement);
}

function removeMessages() {
  var messages = document.querySelectorAll(".form .login-message");
  messages.forEach(function (message) {
    message.remove();
  });
}
