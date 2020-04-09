import React from "react";
import "./PokeCard.scss"

const PokeCard = ({name, firstNature, imgSrc, secondNature}) => {
  return (
    <div className="card">
      <h2 className="cardHeader">{name}</h2>
      <img src={imgSrc} className="cardImg" alt="not found"/>   
      <div className="cardDesc">
        <span className="cardDescNature">{firstNature}</span>
        {
          secondNature ?
            <span className="cardDescNature">{secondNature}</span>
            : null
        }
      </div>
    </div>
  )
}

export default PokeCard;