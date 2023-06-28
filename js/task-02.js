const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainer = document.querySelector('#ingredients');

const makeList = (items) => {
  return items.map(item => {
    const newLiEl = document.createElement('li');
    newLiEl.textContent = item;
    newLiEl.classList.add('item');
    return newLiEl;
  });
}
const elements = makeList(ingredients);
ingredientsContainer.append(...elements);
