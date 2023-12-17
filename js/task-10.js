function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const input = document.querySelector('input');
// const create = document.querySelector('[data-create]');
// const destroy = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');
// const amount = input.value;
// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i++) {
//     let box = '<div></div>';
//     box.style.width = '10';
//     box.style.height = '10';
//     box.style.color = 'getRandomHexColor()';
//   }
// }

// const handleCreate = (event) => {
//   createBoxes();
// };

// const handleDestroy = (event) => {
//   boxes.innerHTML = '';
// };

// create.addEventListener('click', handleCreate);
// destroy.addEventListener('click', handleDestroy);
