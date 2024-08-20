
// Задание 1

// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

// Задание 2

// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".

// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент



// const box = document.querySelector('.box')
// box.addEventListener('mouseover', ()=> {
//     box.setAttribute('style' , ' background-color: red; margin: 30px;width: 200px;height: 200px;')
// })
// box.addEventListener('mouseout', ()=> {
//     box.setAttribute('style' , ' background-color: blue; margin: 30px;width: 200px;height: 200px;')
// })

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
