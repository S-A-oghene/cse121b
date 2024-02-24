const apiKey = '1';
const apiBaseUrl = 'https://www.themealdb.com/api/json/v1/';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const searchMealByName = async (mealName) => {
    const url = `${apiBaseUrl}${apiKey}/search.php?s=${mealName}`;
    return fetchData(url);
};

const getMealDetailsById = async (mealId) => {
    const url = `${apiBaseUrl}${apiKey}/lookup.php?i=${mealId}`;
    return fetchData(url);
};

const displayRecipeDetails = (recipe) => {
    const recipeContainer = document.getElementById('recipeContainer');

    const recipeDetails = `
        <h2>${recipe.strMeal}</h2>
        <img src="${recipe.strMealThumb}/preview" alt="${recipe.strMeal}">
        <h3>Ingredients:</h3>
        <ul>
            ${Object.keys(recipe)
                .filter(key => key.includes('Ingredient') && recipe[key])
                .map(key => `<li>${recipe[key]}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.strInstructions}</p>
    `;

    recipeContainer.innerHTML = recipeDetails;
};

const recommendRecipe = async (mealName) => {
    const data = await searchMealByName(mealName);
    const randomIndex = Math.floor(Math.random() * data.meals.length);
    const randomMeal = data.meals[randomIndex];

    if (randomMeal) {
        const mealDetails = await getMealDetailsById(randomMeal.idMeal);
        displayRecipeDetails(mealDetails.meals[0]);
    } else {
        console.log('No recipe found for the given name.');
    }
};

const mealName = 'Arrabiata';
recommendRecipe(mealName);
