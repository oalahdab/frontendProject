// script.js

// Örnek bir JavaScript fonksiyonu
function showMessage() {
  alert("Butona tiklandi!");
}

// Örneğin, bir butona tiklandiğinda showMessage fonksiyonunu çağirma
const btn = document.getElementById("a");
btn.addEventListener("click", () => showMessage());

console.log("hello");
