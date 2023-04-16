import React from 'react'
import Content from '../components/Content'
import Card from '../components/Card'

import img1 from '../images/card1.jpg'
import img2 from '../images/card2.jpg'
import img3 from '../images/card3.png'

const Contents = () => {
  return (
    <div>
        <Content titulo="Contents Page">
        <h3>Javascript Developer 2023</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Perspiciatis dolores sed sapiente!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Perspiciatis dolores sed sapiente!
        </p>
        <button>CV Download</button>
      </Content>
      <div className="card-container">
        <Card 
          imagem={img1}
          titulo="ReactDev"
          texto="Desenvolvimento de paginas robustas e modernas"
        />
        <Card 
          imagem={img2}
          titulo="CyberSecurity"
          texto="Desenvolvimento de paginas robustas e modernas"
        />
        <Card 
          imagem={img3}
          titulo="Programming Basics"
          texto="Desenvolvimento de paginas robustas e modernas"
        />
      </div>
    </div>
  )
}

export default Contents