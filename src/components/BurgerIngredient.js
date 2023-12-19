/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux';
import { addIngredient, removeIngredient } from '../actions/burgerActions';

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
      <td><button className='ingrBtn' disabled={disabled} onClick={handleRemoveIngredient}>Less</button></td>
      <td><button className='ingrBtn' onClick={handleAddIngredient}>More</button></td>
    </tr>
  )
}
