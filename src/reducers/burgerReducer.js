import {
  DEFAULT_PRICE,
  LETTUCE_PRICE,
  TOMATO_PRICE,
  CHEESE_PRICE,
  MEAT_PRICE,
} from '../constants';

const initialState = {
  ingredients: {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  },
  price: DEFAULT_PRICE,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + getPrice(action.ingredient),
      };

    case 'REMOVE_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - getPrice(action.ingredient),
      };

    default:
      return state;
  }
};

const getPrice = (ingredient) => {
  switch (ingredient) {
    case 'lettuce':
      return LETTUCE_PRICE;
    case 'tomato':
      return TOMATO_PRICE;
    case 'cheese':
      return CHEESE_PRICE;
    case 'meat':
      return MEAT_PRICE;
    default:
      return 0;
  }
};

export default burgerReducer;
