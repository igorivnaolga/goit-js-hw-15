const fontControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handler = () => {
  const font = fontControl.value;
  text.style.fontSize = `${font}px`;
};
handler();
fontControl.addEventListener('input', handler);
