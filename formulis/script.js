let pesan = document.getElementById("kirim");
pesan.addEventListener("click", function () {
  let penamaan = document.getElementById("nama");
  let pesurel = document.getElementById("email");
  let petunjuk = document.getElementById("tujuan");
  let penjadwalan = document.getElementById("jadwal");
  let peniketan = document.getElementById("tiket");
  let atps = email.value.indexOf("@");
  let dots = email.value.lastIndexOf(".");
  let check = true;

  if (penamaan.value == "") {
    var req_nama = document.getElementById("erorkosong");
    req_nama.style.display = "block";
    check = false;
  } else if (nama.value > 30) {
    var char_nama = document.getElementById("karakter");
    char_nama.style.display = "block";
    check = false;
  }
  if (penjadwalan.value == "") {
    var req_jam = document.getElementById("jadwalkosong");
    req_jam.style.display = "block";
    check = false;
  }
  if (petunjuk.value == "") {
    let tujuan = document.getElementById("tujuannol");
    tujuan.style.display = "block";
    check = false;
  }
  if (peniketan.value == "") {
    var req_tiket = document.getElementById("tiket");
    req_tiket.style.display = "block";
    check = false;
  } else if (peniketan.value > 10) {
    var char_tiket = document.getElementById("maxtiket");
    char_tiket.style.display = "block";
    check = false;
  }
  if (atps < 1 || dots < atps + 2 || dots + 2 >= pesurel.value.leng) {
    if (pesurel.value == "") {
      var req_email = document.getElementById("emakosong");
      req_email.style.display = "block";
      check = false;
    } else {
      var valid_email = document.getElementById("akeong");
      valid_email.style.display = "block";
      check = false;
    }
  }
  if (check == true) {
    var hasil_nama = document.getElementById("hasilnama");
    var hasil_email = document.getElementById("hasilemail");
    var hasil_jam = document.getElementById("hasiljadwal");
    var hasil_jadwal = document.getElementById("hasiltujuan");
    var hasil_tiket = document.getElementById("hasiltiket");
    hasil_nama.innerHTML = penamaan.value;
    hasil_email.innerHTML = pesurel.value;
    hasil_jam.innerHTML = penjadwalan.value;
    hasil_jadwal.innerHTML = petunjuk.value;
    hasil_tiket.innerHTML = peniketan.value;

    penamaan.value = "";
    pesurel.value = "";
    penjadwalan.value = "";
    petunjuk.value = "";
    peniketan.value = "";
  }
});
