import React from 'react'
import './Content.css'

const Content = ({ titulo, children }) => {
  return (
    <div className='container-contents'>
        <h2 className='title'>{titulo}</h2>
        <div className='contents'>
            {children}
        </div>
    </div>
  )
}

export default Content