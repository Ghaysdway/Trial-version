const box = document.querySelector('.box')
box.addEventListener('mouseover', ()=> {
    box.setAttribute('style' , ' background-color: red; margin: 30px;width: 200px;height: 200px;')
})
box.addEventListener('mouseout', ()=> {
    box.setAttribute('style' , ' background-color: blue; margin: 30px;width: 200px;height: 200px;')
})

const colorButton = document.getElementById("colorButton");
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

colorButton.addEventListener("click", () => {
  const colorBlock = document.getElementById("colorBlock");
  const newColor = getRandomRgbColor();
  colorBlock.style.backgroundColor = newColor;
});
