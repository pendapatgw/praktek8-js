let pilih = document.getElementById("pilihgambar");
pilih.addEventListener("change", function () {
  let gambar = document.getElementById("tampilan");
  gambar.src = "img/" + this.value;
  setTimeout(() => {
    alert("ini adalah film " + pilih.value);
  }, 500);
});
