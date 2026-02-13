function generate() {
  const length = document.getElementById("length").value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";

  if (length < 8 || length > 20) {
    alert("Choose length between 8 and 20");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("result").innerText = password;
}