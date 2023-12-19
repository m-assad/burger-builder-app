import React, { useState } from 'react';
import { Footer } from './Footer';
import Navbar from './Navbar';

import './BurgerStyle.css';


import { DEFAULT_PRICE } from '../constants';

const Burger = () => {
  const [ingredients, setingredients] = useState({
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  })

  const [price, setPrice] = useState(DEFAULT_PRICE)

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
      <Footer ingredients={ingredients} setingredients={setingredients} price={price} setPrice={setPrice} />
    </>
  );
}
export default Burger;
