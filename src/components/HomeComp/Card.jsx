import React from 'react'
import { CardComp } from '../../pages/Home/styles'

const Card = ({ title, text, image }) => {
  return (
    <CardComp>
        <h2>{title}</h2>
        <p>{text}</p>
        <img src={image} alt="" />
    </CardComp>
  )
}

export default Card