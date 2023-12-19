import React from 'react'

// eslint-disable-next-line react/prop-types
export const BurgerIngredient = ({name, disabled, addIngredient, removeIngredient}) => {
  return (
    <tr>
        <td><p>{name}</p></td>
        <td><button className='ingrBtn' disabled={disabled} onClick={removeIngredient}>Less</button></td>
        <td><button className='ingrBtn' onClick={addIngredient}>More</button></td>
      </tr>
  )
}
