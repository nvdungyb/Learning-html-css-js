function validateEmail(input) {
  var email = input.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailError = document.getElementById("emailError");

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address";
  } else {
    emailError.textContent = "";
  }
}

function validatePassword(input) {
  var password = input.value.trim();
  var passwordError = document.getElementById("passwordError");

  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
  } else {
    passwordError.textContent = "";
  }
}
