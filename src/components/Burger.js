import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import {
  DEFAULT_PRICE,
  LETTUCE_PRICE,
  TOMATO_PRICE,
  CHEESE_PRICE,
  MEAT_PRICE,
} from '../constants';
import './BurgerStyle.css';

const Burger = () => {
  const [ingredients, setingredients] = useState({
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  })

  const [price, setPrice] = useState(DEFAULT_PRICE)

  const navigate = useNavigate()
  const toSignup = () => navigate('/auth')

  const addRemoveIngredient = (action, ingredient) => {
    if (action === 'add') {
      if (ingredient === 'lettuce') {
        setingredients(previousState => {
          return { ...previousState, lettuce: ingredients.lettuce + 1 }
        })
        setPrice(price + LETTUCE_PRICE)
      }
      if (ingredient === 'tomato') {
        setingredients(previousState => {
          return { ...previousState, tomato: ingredients.tomato + 1 }
        })
        setPrice(price + TOMATO_PRICE)
      }
      if (ingredient === 'cheese') {
        setingredients(previousState => {
          return { ...previousState, cheese: ingredients.cheese + 1 }
        })
        setPrice(price + CHEESE_PRICE)
      }
      if (ingredient === 'meat') {
        setingredients(previousState => {
          return { ...previousState, meat: ingredients.meat + 1 }
        })
        setPrice(price + MEAT_PRICE)
      }
    } else {
      if (ingredient === 'lettuce') {
        setingredients(previousState => {
          return { ...previousState, lettuce: ingredients.lettuce - 1 }
        })
        setPrice(price - LETTUCE_PRICE)
      }
      if (ingredient === 'tomato') {
        setingredients(previousState => {
          return { ...previousState, tomato: ingredients.tomato - 1 }
        })
        setPrice(price - TOMATO_PRICE)
      }
      if (ingredient === 'cheese') {
        setingredients(previousState => {
          return { ...previousState, cheese: ingredients.cheese - 1 }
        })
        setPrice(price - CHEESE_PRICE)
      }
      if (ingredient === 'meat') {
        setingredients(previousState => {
          return { ...previousState, meat: ingredients.meat - 1 }
        })
        setPrice(price - MEAT_PRICE)
      }
    }
  }

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
      <div className='burger'>

      </div>
      <div className='ingredientsBlock'>
        <p>Current Price: ${price}</p>

        <table>
          <tr>
            <td><p>Lettuce</p></td>
            <td><button className='ingrBtn' disabled={ingredients.lettuce ? false : true} onClick={() => addRemoveIngredient('remove', 'lettuce')}>Less</button></td>
            <td>
              <button className='ingrBtn' onClick={() =>
                addRemoveIngredient('add', 'lettuce')}>More</button></td>
          </tr>
          <tr>
            <td><p>Tomato</p></td>
            <td><button className='ingrBtn' disabled={ingredients.tomato ? false : true} onClick={() => addRemoveIngredient('remove', 'tomato')}>Less</button></td>
            <td><button className='ingrBtn' onClick={() => addRemoveIngredient('add', 'tomato')}>More</button></td>
          </tr>
          <tr>
            <td><p>Cheese</p></td>
            <td><button className='ingrBtn' disabled={ingredients.cheese ? false : true} onClick={() => addRemoveIngredient('remove', 'cheese')}>Less</button></td>
            <td><button className='ingrBtn' onClick={() => addRemoveIngredient('add', 'cheese')}>More</button></td>
          </tr>
          <tr>
            <td><p>Meat</p></td>
            <td><button className='ingrBtn' disabled={ingredients.meat ? false : true} onClick={() => addRemoveIngredient('remove', 'meat')}>Less</button></td>
            <td><button className='ingrBtn' onClick={() => addRemoveIngredient('add', 'meat')}>More</button></td>
          </tr>
        </table>

        <button disabled={price > DEFAULT_PRICE ? false : true} onClick={toSignup} className='signup-btn'>Sign up to order</button>
      </div>
    </>
  );
}
export default Burger;
