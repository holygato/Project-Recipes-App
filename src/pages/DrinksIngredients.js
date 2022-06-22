import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import Footer from '../Components/Footer';

function DrinksIngredients() {
  return (
    <div>
      <HeaderNoSearch title="Explore Ingredients" shouldRenderMagnifier />
      <Footer />
    </div>
  );
}

export default DrinksIngredients;