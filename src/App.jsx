import './index.css'
import React from 'react'
import Header from './Components/Header/Header.jsx'
import Sobre from './Components/Sobre/Sobre.jsx'
import Section from './Components/Section/Section.jsx'
import Projetos from './Components/Projetos/Projetos.jsx'

function App() {

  return (
    <>


      <main>
        <Header />
        <Section>

          <Sobre />

          <div className='barra'></div>

          <Projetos />

        </Section>

      </main>


    </>
  )
}

export default App
