import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const ViewRecipes = ({ selectedRecipe }) => {

    return (
        <section className='md:w-2/3 bg-cyan-300 p-4 rounded-lg shadow-lg'>
             {selectedRecipe ? (
            <div>
                <h2 className='text-3xl font-bold text-red-600 mb-4'>{selectedRecipe.name}</h2>
                <p className='text-lg'><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
            </div>
        ) : (
            <div className='flex items-center justify-center h-full'>
                <AlertCircle className='text-orange-500 mr-2' size={24} />
                <p className='text-xl text orange-500'>Select a recipe to view details</p>
            </div>
        )}
        </section>
    )
}

export default ViewRecipes;