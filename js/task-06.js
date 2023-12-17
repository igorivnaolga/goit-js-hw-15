const validationInput = document.querySelector('#validation-input');
const dataLength = parseInt(
  document.querySelector('input[data-length]').getAttribute('data-length')
);

const handler = (event) => {
  const inputValueLength = event.currentTarget.value.trim().length;

  if (inputValueLength === dataLength) {
    validationInput.classList.add('valid');

    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

validationInput.addEventListener('blur', handler);
