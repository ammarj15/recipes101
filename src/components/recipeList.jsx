import React, { useState } from 'react';

const recipes = [
    { id: 1, name: 'Carbone Inspired Spicy Rigatoni', ingredients: 'pasta'},
    { id: 2, name: 'Ground Turkey Stir Fry', ingredients: 'turkey'},
    { id: 3, name: 'Hot Honey Chicken', ingredients: 'Honey, Chicken'},
];

const RecipeList = ({ setSelectedRecipe }) => {

    return (
        <section className='md:w-1/3 bg-pink-300 p-4 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-green-600 mb-4'>Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li
                        key={recipe.id}
                        className='mb-2 cursor-pointer text-blue-700 hover:text-blue-900 underline'
                        onClick={() => setSelectedRecipe(recipe)}
                    >
                        {recipe.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RecipeList;