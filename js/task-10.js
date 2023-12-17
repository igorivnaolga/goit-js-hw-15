function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const amount = input.value;
let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    let box = document.createElement('div');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.insertAdjacentElement('beforeend', box);
    width += 10;
    height += 10;
  }
}

const handleCreate = (event) => {
  const amount = input.value;

  createBoxes(amount);
};

const handleDestroy = (event) => {
  boxes.innerHTML = '';
  input.value = 0;
};

create.addEventListener('click', handleCreate);
destroy.addEventListener('click', handleDestroy);
