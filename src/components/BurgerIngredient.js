/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux';
import { addIngredient, removeIngredient } from '../actions/burgerActions';

import * as Styles from './BurgerIngredientsStyles';

export const BurgerIngredient = ({name, disabled}) => {
  const dispatch = useDispatch();

  const handleAddIngredient = () => {
    dispatch(addIngredient(name.toLowerCase()));
  };

  const handleRemoveIngredient = () => {
    dispatch(removeIngredient(name.toLowerCase()));
  };
  return (
    <tr>
      <td><p>{name}</p></td>
      <td><Styles.IngrBtn disabled={disabled} onClick={handleRemoveIngredient}>Less</Styles.IngrBtn></td>
      <td><Styles.IngrBtn onClick={handleAddIngredient}>More</Styles.IngrBtn></td>
    </tr>
  )
}
