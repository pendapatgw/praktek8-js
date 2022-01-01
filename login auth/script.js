function validate() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  if (username == "fajar23" && password == "1515") {
    alert("Login Sukses");
    window.open("loginsukses.html");
  } else if (username != "fajar23" && password != "1515") {
    alert("Tolong Masukan Username Dengan Benar");
  } else {
    alert("Tidak Punya Akun?");
  }
}
