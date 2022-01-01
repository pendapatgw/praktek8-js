function chat() {
  let tempatChat = document.getElementById("isi");
  let chat = document.getElementById("chatmasuk").value;

  if (chat) {
    tempatChat.innerHTML += `${chat} <br>`;
  }

  document.getElementById("chatmasuk").value = "";
}
