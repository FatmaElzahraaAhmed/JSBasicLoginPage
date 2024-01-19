document.getElementById("loginButton").addEventListener("click", function () {
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;

  var login = {
    username: username,
    password: password,
  };
  
  removeMessages();

  if (login.username === "admin" && login.password === "123") {
    showMessage("Welcome!");
  } else {
    showMessage("Not registered.");
  }
});

function showMessage(message) {
  var messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.style.color = "red";
  messageElement.style.paddingTop = "10px";
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
