import React from 'react';
import { useSelector } from 'react-redux';
import { Footer } from './Footer';
import Navbar from './Navbar';

import './BurgerStyle.css';

const Burger = () => {
  const ingredients = useSelector((state) => state.ingredients);

  const burgerContent = () => {
    let burger = [];

    for (let i = 0; i < ingredients.lettuce; i++) {
      burger.push(<div className='lettuseSide'></div>);
    }
    for (let i = 0; i < ingredients.tomato; i++) {
      burger.push(<div className='tomatoSide'></div>);
    }
    for (let i = 0; i < ingredients.cheese; i++) {
      burger.push(<div className='cheeseSide'></div>);
    }
    for (let i = 0; i < ingredients.meat; i++) {
      burger.push(<div className='meatSide'></div>);
    }
    if (burger.length === 0)
      burger.push(<p>No Ingredients Added</p>);
    return burger;
  }
  return (
    <>
      <Navbar />
      <div className='burgerIngredients'>
        <div className='topSide'></div>
        {burgerContent()}
        <div className='bottomSide'></div>
      </div>
      <Footer />
    </>
  );
}
export default Burger;
