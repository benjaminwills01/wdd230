document.getElementById("confirmpassword").oninput = function () {
  if (this.value !== document.getElementById("password").value) {
    this.setCustomValidity("Passwords do not match. Please try again");
  } else {
    this.setCustomValidity("");
  }
};
