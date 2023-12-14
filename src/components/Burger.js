import React, { useState } from 'react';

import './BurgerStyle.css';
import Navbar from './Navbar';

const Burger = () => {
  const [lettuce, setLettuce] = useState(0)
  const [tomato, setTomato] = useState(0)
  const [cheese, setCheese] = useState(0)
  const [meat, setMeat] = useState(0)
  const [price, setPrice] = useState(3)

  
  const addRemoveIngredient = (action, ingredient) => {
    if (action === 'add') {
      if (ingredient === 'lettuce') {
        setLettuce(lettuce + 1)
        setPrice(price + 0.5)
      }
      if (ingredient === 'tomato') {
        setTomato(tomato + 1)
        setPrice(price + 1)
      }
      if (ingredient === 'cheese') {
        setCheese(cheese + 1)
        setPrice(price + 1.5)
      }
      if (ingredient === 'meat') {
        setMeat(meat + 1)
        setPrice(price + 2)
      }
    } else {
      if (ingredient === 'lettuce') {
        setLettuce(lettuce - 1)
        setPrice(price - 0.5)
      }
      if (ingredient === 'tomato') {
        setTomato(tomato - 1)
        setPrice(price - 1)
      }
      if (ingredient === 'cheese') {
        setCheese(cheese - 1)
        setPrice(price - 1.5)
      }
      if (ingredient === 'meat') {
        setMeat(meat - 1)
        setPrice(price - 2)
      }
    }
  }

  const burgerContent = () => {
    let burger = [];

    for (let i = 0; i < lettuce; i++) {
      burger.push(<div className="lettuseSide"></div>);
    }
    for (let i = 0; i < tomato; i++) {
      burger.push(<div className="tomatoSide"></div>);
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div className="cheeseSide"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div className="meatSide"></div>);
    }
    if (burger.length === 0)
      burger.push(<p>No Ingredients Added</p>);
    return burger;
  }
  return (
    <>
      <Navbar />
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
      <div className="burger">

      </div>
      <div className="ingredientsBlock">
        <p>Current Price: ${price}</p>

        <table>
          <tr>
            <td><p>Lettuce</p></td>
            <td><button className="ingrBtn" disabled={lettuce ? false : true} onClick={() => addRemoveIngredient('remove', 'lettuce')}>Less</button></td>
            <td>
              <button className="ingrBtn" onClick={() =>
                addRemoveIngredient('add', 'lettuce')}>More</button></td>
          </tr>
          <tr>
            <td><p>Tomato</p></td>
            <td><button className="ingrBtn" disabled={tomato ? false : true} onClick={() => addRemoveIngredient('remove', 'tomato')}>Less</button></td>
            <td><button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'tomato')}>More</button></td>
          </tr>
          <tr>
            <td><p>Cheese</p></td>
            <td><button className="ingrBtn" disabled={cheese ? false : true} onClick={() => addRemoveIngredient('remove', 'cheese')}>Less</button></td>
            <td><button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'cheese')}>More</button></td>
          </tr>
          <tr>
            <td><p>Meat</p></td>
            <td><button className="ingrBtn" disabled={meat ? false : true} onClick={() => addRemoveIngredient('remove', 'meat')}>Less</button></td>
            <td><button className="ingrBtn" onClick={() => addRemoveIngredient('add', 'meat')}>More</button></td>
          </tr>
        </table>

        <button disabled={price ? false : true} className='signup-btn'>Sign up to order</button>
      </div>
    </>
  );
}
export default Burger;
