import React from "react";

const PokeCard = ({name, firstNature}) => {
  return (
    <div className="card">
      <h3 className="cardHeader">{name}</h3>
      <img className="cardImg" alt="not found"/>   
      <p className="cardDesc">
        {firstNature}
      </p>
    </div>
  )
}

export default PokeCard;