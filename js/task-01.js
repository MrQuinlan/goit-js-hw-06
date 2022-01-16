const allCategoriesRef = document.querySelectorAll('#categories li.item');
console.log('Number of categories: ', allCategoriesRef.length);

allCategoriesRef.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
});
