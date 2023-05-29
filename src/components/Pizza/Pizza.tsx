import React from 'react';
import './styles.css';

type Types = {
  name: string;
  imageURL: string;
  ingredientList: object[];
};

const Pizza = (props: Types): React.ReactElement => {
  return (
    <>
      <div className="pizza-container">
        <div className="pizza-text-container">
          <h3>{props.name}</h3>
          <ul>
            {props.ingredientList.map((ingredient: any, index: number) => {
              return <li key={index}>{ingredient.name}</li>;
            })}
          </ul>
        </div>
        <img className="pizza-img" src={props.imageURL} alt="a pizza" />
      </div>
    </>
  );
};

export default Pizza;
