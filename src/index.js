function checkPassword() {
  const password = document.getElementById("password").value;
  const ConfirmPassword = document.getElementById("confirm-password").value;
  const validmsg = document.getElementById("match-password-msg");

  if (ConfirmPassword == password) {
    validmsg.innerText = " ";
    return;
  }

  validmsg.innerText = "*Please make sure your passwords match";
}
