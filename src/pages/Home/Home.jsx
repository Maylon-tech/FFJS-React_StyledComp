import React from 'react'
import { Card, Container, MiddleModule, Section } from './styles'
import Contador from '../../components/HomeComp/Counter/Contador'

//  Render Componets Users - Counter and ...
const page = {

}

const Home = () => {



  
  return (
    <Container>
        <h1>Module Basics of Formacao Fullstack JS</h1>
        <Section>

          <Card>
            <h3>card one</h3>
          </Card>

          <Card>
            <h3>Card two</h3>
          </Card>

          <Card>
            <h3>Card three</h3>
          </Card>

        </Section>

        <MiddleModule>
          <Contador title='Contador' />
          {/* { Page && <Page /> } */}
        </MiddleModule>
    </Container>
  )
}

export default Home