const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorBtn.addEventListener("click", () => {
    const newClor = getRandomHexColor();
    document.body.style.backgroundColor = newClor;
    textColor.textContent = newClor;
});
