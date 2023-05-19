import React from 'react'
import { Container, MiddleModule, Section } from './HomeStyles'

import Card from '../../components/HomeComp/Card'
import ReactImage from '../../assets/images/react.png'
import TypescriptImage from '../../assets/images/typescript.png'
import JavascriptImage from '../../assets/images/javascript.png'



const Home = () => {

  return (
    <Container>
        <h1>Module Basics of Formacao Fullstack JS</h1>
        <Section>

          <Card
            title="Javascript"
            text="Great language used to build front-end"
            image={JavascriptImage}
          />

          <Card
            title="Typescript"
            text="The super set of Javascript language."
            image={TypescriptImage}
          />

          <Card 
            title="ReactJS"
            text="The best Lib to build Front-End Web Page."
            image={ReactImage}
          />

        </Section>

        
    </Container>
  )
}

export default Home