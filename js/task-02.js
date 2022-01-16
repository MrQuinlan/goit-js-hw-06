const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsRef = document.querySelector('#ingredients');

// const liItems = [];

// const itemRef = ingredients.forEach(ingredient => {
//     const liItem = document.createElement('li');
//     liItem.classList = 'item';
//     liItem.textContent = ingredient;

//     liItems.push(liItem);
// });

// const liItems = ingredients.map(ingredient => {
//     const liItem = document.createElement('li');
//     liItem.classList = 'item';
//     liItem.textContent = ingredient;
//     return liItem;
// });

// ingredientsRef.append(...liItems);

const createLiItem = options => {
    return options.map(ingredient => {
        const liItem = document.createElement('li');
        liItem.classList = 'item';
        liItem.textContent = ingredient;
        return liItem;
    });
};

const newIngredients = createLiItem(ingredients);

ingredientsRef.append(...newIngredients);
