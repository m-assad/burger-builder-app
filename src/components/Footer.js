/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
  DEFAULT_PRICE,
  LETTUCE_PRICE,
  TOMATO_PRICE,
  CHEESE_PRICE,
  MEAT_PRICE,
} from '../constants';
import { BurgerIngredient } from './BurgerIngredient';

export const Footer = ({ingredients, setingredients, price, setPrice}) => {

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
