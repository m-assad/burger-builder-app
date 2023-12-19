/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addIngredient, removeIngredient } from '../actions/burgerActions';
import { BurgerIngredient } from './BurgerIngredient';
import { useNavigate } from 'react-router-dom';

import { DEFAULT_PRICE } from '../constants';

export const Footer = () => {

  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);
  const price = useSelector((state) => state.price);

  const addRemoveIngredient = (action, ingredient) => {
    if (action === 'add') {
      dispatch(addIngredient(ingredient));
    } else {
      dispatch(removeIngredient(ingredient));
    }
  };


  const navigate = useNavigate()
  const toSignup = () => navigate('/auth')

  return (
    <div className='ingredientsBlock'>
      <p>Current Price: ${price}</p>
      <table>
        <BurgerIngredient name='Lettuce' disabled={ingredients.lettuce ? false : true} addIngredient={() => addRemoveIngredient('add', 'lettuce')} removeIngredient={() => addRemoveIngredient('remove', 'lettuce')}/>
        <BurgerIngredient name='Tomato' disabled={ingredients.tomato ? false : true} addIngredient={() => addRemoveIngredient('add', 'tomato')} removeIngredient={() => addRemoveIngredient('remove', 'tomato')}/>
        <BurgerIngredient name='Cheese' disabled={ingredients.cheese ? false : true} addIngredient={() => addRemoveIngredient('add', 'cheese')} removeIngredient={() => addRemoveIngredient('remove', 'cheese')}/>
        <BurgerIngredient name='Meat' disabled={ingredients.meat ? false : true} addIngredient={() => addRemoveIngredient('add', 'meat')} removeIngredient={() => addRemoveIngredient('remove', 'meat')}/>
      </table>
      <button disabled={price > DEFAULT_PRICE ? false : true} onClick={toSignup} className='signup-btn'>Sign up to order</button>
    </div>
  )
}
