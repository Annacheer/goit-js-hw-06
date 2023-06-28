const elements = document.querySelectorAll('.item');
// //Задание 1 - 1-й вариант----------------------------------------------
// // console.log(elements.length);
// // console.log(`Number of categories: ${elements.length}`);

// //Задание 1 - 2-й вариант----------------------------------------------
let totalCategories = 0;
Array.from(elements).forEach((element) => {
    totalCategories += 1;  
})
console.log(`Number of categories: ${totalCategories}`);

//Задание 2------------------------------------------------------------
const ulElement = document.querySelector('#categories');

const liElements = ulElement.querySelectorAll('li.item');

liElements.forEach((li) => {
  const categoryTitle = li.querySelector('h2').textContent;
  const categoryItems = li.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});



