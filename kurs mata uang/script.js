function titikMataUang(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function kursMataUang() {
  let nilai = document.getElementById("nilai").value;

  let kurs = document.getElementById("kurs").value;
  switch (kurs) {
    case "usd":
      document.getElementById("hasil").value = `Rp. ${titikMataUang(parseFloat(nilai) * 14189)},-`;
      break;
    case "sgd":
      document.getElementById("hasil").value = `Rp. ${titikMataUang(parseFloat(nilai) * 10440)},-`;
      break;
    case "rm":
      document.getElementById("hasil").value = `Rp. ${titikMataUang(parseFloat(nilai) * 3382)},-`;
      break;
    case "yen":
      document.getElementById("hasil").value = `Rp. ${titikMataUang(parseFloat(nilai) * 124)},-`;
      break;
    case "euro":
      document.getElementById("hasil").value = `Rp. ${titikMataUang(parseFloat(nilai) * 16065)},-`;
      break;
    case "riyal":
      document.getElementById("hasil").value = `Rp. ${titikMataUang(parseFloat(nilai) * 3779)},-`;
      break;
    default:
      break;
  }
}
