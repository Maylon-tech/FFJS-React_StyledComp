import React from 'react'
import { CardComp } from '../../pages/Home/styles'

const Card = ({ title, text, image }) => {
  return (
    <CardComp>
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <img src={image} alt="" />
        </div>
    </CardComp>
  )
}

export default Card