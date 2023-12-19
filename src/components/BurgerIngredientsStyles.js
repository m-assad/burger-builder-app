import styled from 'styled-components';

export const BurgerIngredients = styled.div`
  height: 60vh;
  width: 100%;
  overflow: auto;
`;

export const BurgerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopSide = styled.div`
  background-image: url(../assets/top.jpg);
  background-size: 300px;
  height: 110px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BottomSide = styled.div`
  background-image: url(../assets/bottom.jpg);
  background-size: 300px;
  height: 60px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
`;

export const IngredientSide = styled.div`
  background-size: 300px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LettuceSide = styled(IngredientSide)`
  height: 27px;
  background-image: url(../assets/lettuce.jpg);
`;

export const TomatoSide = styled(IngredientSide)`
  height: 20px;
  background-image: url(../assets/tomato.jpg);
`;

export const CheeseSide = styled(IngredientSide)`
  height: 15px;
  background-image: url(../assets/cheese.jpg);
`;

export const MeatSide = styled(IngredientSide)`
  height: 49px;
  background-image: url(../assets/meat.jpg);
`;

export const IngredientButtons = styled.div`
  margin: 0 0 20px;
  justify-content: center;
`;

export const IngrBtn = styled.button`
  border: 0;
  background-color: #c17116;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  width: 95px;

  &:disabled {
    background-color: bisque;
    cursor: not-allowed;
  }
`;
