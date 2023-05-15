import React from 'react'
import { Container, MiddleModule, Section } from './styles'
import Contador from '../../components/HomeComp/Counter/Contador'
import Card from '../../components/HomeComp/Card'
import ReactImage from '../../assets/images/react.png'
import TypescriptImage from '../../assets/images/typescript.png'
import JavascriptImage from '../../assets/images/javascript.png'

//  Render Componets Users - Counter and ...
const page = {

}

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

        <MiddleModule>
          <Contador title='Contador' />
          {/* { Page && <Page /> } */}
        </MiddleModule>
    </Container>
  )
}

export default Home