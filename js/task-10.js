function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let sizes = 30;
  const elements = [];
  for (let i = 1; i <= amount; i++) {
    let box = document.createElement('div');
    box.style.width = sizes + 'px';
    box.style.height = sizes + 'px';
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    sizes += 10;
  }
  boxes.append(...elements);
}

const handleCreate = (event) => {
  const amount = input.value;
  destroyBoxes();
  createBoxes(amount);
};

const handleDestroy = (event) => {
  destroyBoxes();
  input.value = 0;
};
function destroyBoxes() {
  boxes.innerHTML = '';
}

create.addEventListener('click', handleCreate);
destroy.addEventListener('click', handleDestroy);
