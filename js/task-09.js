function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const page = document.querySelector('body');
const color = document.querySelector('.color');

const handleClick = (event) => {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  page.style.backgroundColor = randomColor;
};
changeColorBtn.addEventListener('click', handleClick);
