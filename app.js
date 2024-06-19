const formTebakan = document.getElementById("formTebak");
const inputTebakan = document.getElementById("tebakan");
const pesanElement = document.getElementById("pesanTebakan");

const angkaMaksimal = 100;
const angkaMinimal = 1;

let angkaRandom =
  Math.floor(Math.random() * (angkaMaksimal - angkaMinimal - 1)) + angkaMinimal;

formTebakan.addEventListener("submit", function (e) {
  e.preventDefault();
  const tebakan = parseInt(inputTebakan.value);

  if (tebakan === "" || isNaN(tebakan)) {
    pesanElement.textContent = "Input harus diisi jika ingin menebak!";
    pesanElement.classList.add("text-red-500");
    return;
  }

  if (tebakan == angkaRandom) {
    pesanElement.textContent = "Selamat! Anda Berhasil Menebak Angka ini";
    pesanElement.classList.add("text-green-500");
  } else if (tebakan < angkaRandom) {
    pesanElement.textContent = "Tebakanmu terlalu kecil. Coba lagi😉";
    pesanElement.classList.remove("text-red-500");
  } else {
    pesanElement.textContent = "Tebakanmu terlalu besar. Coba lagi😉";
    pesanElement.classList.remove("text-red-500");
  }
});
