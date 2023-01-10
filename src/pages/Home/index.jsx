import React, { useState } from 'react'
import '../../styles/global.css'
import styles from './index.module.css'
import Nav from '../../components/Nav'
import Main from '../../components/Main'
import NewAnimal from '../../components/NewAnimal'
import Info from '../../components/Info'
import Reset from '../../components/Reset'

function Home() {
  const [showCard, setShowCard] = useState(false)
  const [showCardReset, setShowCardReset] = useState(false)

  const [showInfo, setShowInfo] = useState(false)

  return (
    <div
      className={
        showCard || showCardReset || showInfo ? styles.container : null
      }
    >
      <Nav
        handleShowCard={setShowCard}
        handleShowCardReset={setShowCardReset}
      />
      <Main handleShowInfo={setShowInfo} />

      {showCard && <NewAnimal handleShowCard={setShowCard} />}
      {showCardReset && <Reset handleShowCardReset={setShowCardReset} />}
      {showInfo && <Info handleShowInfo={setShowInfo} />}
    </div>
  )
}
export default Home
