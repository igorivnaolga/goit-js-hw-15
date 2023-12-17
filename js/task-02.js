const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngridients = document.querySelector('#ingredients');

const markup = ingredients.map((ingridient) => {
  const liElement = document.createElement('li');
  liElement.textContent = ingridient;
  liElement.classList = 'ingridient';
  console.log(liElement);
  return liElement;
});

listOfIngridients.append(...markup);
