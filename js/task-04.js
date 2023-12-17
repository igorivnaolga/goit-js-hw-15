let counterValue = 0;
const initialValue = document.getElementById('value');

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

function onClickDecrement() {
  counterValue -= 1;
  initialValue.textContent = counterValue;
}
function onClickIncrement() {
  counterValue += 1;
  initialValue.textContent = counterValue;
}

buttonDecrement.addEventListener('click', onClickDecrement);
buttonIncrement.addEventListener('click', onClickIncrement);
