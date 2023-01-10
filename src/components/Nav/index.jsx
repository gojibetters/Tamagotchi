import React, { useState } from 'react'
import Title from '../../assets/tamagotchi_title.png'
import styles from './index.module.css'

function Nav(props) {
  return (
    <nav style={styles.navBar}>
      <img src={Title} alt="" className={styles.logo} />
      <button
        className={styles.newAnimal}
        onClick={() => props.handleShowCard(true)}
      >
        Criar Animal
      </button>
      <button
        className={styles.reset}
        onClick={() => props.handleShowCardReset(true)}
      >
        Resetar
      </button>
    </nav>
  )
}

export default Nav
