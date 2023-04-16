import React from 'react'
import './Card.css'


const Card = ({ texto, titulo, imagem }) => {
  return (
    <div className='card'>

        <img src={imagem} alt="img"/>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <button>See More</button>

    </div>
  )
}

export default Card