import { useState } from 'react';

import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'

const articles = [
  { 
    id: 1,
    title: "O que faz um desenvolvedor Front end",
    content: (
      <>
        <h1>O que faz um desenvolvedor Front end</h1>
        <p>O desenvolvedor front-end é responsável pela experiência do usuário dentro de uma aplicação web, é ele quem vai desenhar e desenvolver as páginas com as quais, posteriormente, o usuário irá interagir. </p>
        <h2>Como aprender?</h2>
        <p>Para ser um desenvolvedor front-end você precisa se familiarizar com lógica de programação aprender algumas linguagens, como por exemplo: </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Frameworks</li>
        </ul>
      </>
      )
    },
    {
      id: 2,
      title: "O que o react pode fazer",
      content: (
        <>
          <h1>O que o React pode fazer</h1>
          <p>O React é uma biblioteca JavaScript para construir interfaces de usuário</p>
          <h4>O que você vai aprender</h4>
          <ul>
            <li>Destructuring Assignment</li>
            <li>JSX</li>
            <li>Composição de componentes</li>
            <li>Componentes customizados</li>
          </ul>
        </>
      )
    }
  ]

function App() {
  return ( 
    <div>
      <Header />
      <Menu />
      <Sidebar articles={articles} />
      <Content />
      <Footer />
    </div>
  )
}

export default App