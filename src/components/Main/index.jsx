import React, { useState } from 'react'
import styles from './index.module.css'
import Tamagotchi from '../../assets/tamagotchi_egg.png'
import info from '../../assets/info_icon.svg'

function Main(props) {
  return (
    <main style={props.show}>
      <div className={styles.containerImg}>
        <img
          className={styles.info}
          src={info}
          alt=""
          onClick={() => {
            props.handleShowInfo(true)
          }}
        />
        <img className={styles.tamagotchiImg} src={Tamagotchi} alt="" />
      </div>
      <ul>
        <li>
          <h1 className={styles.titleAction}>Ações</h1>
          <button
            className={styles.buttonEat}
            onClick={() => {
              alert('Comeu!')
            }}
          >
            Alimentar
          </button>
          <button
            className={styles.buttonSleep}
            onClick={() => {
              alert('Dormiu... zzZZZzz')
            }}
          >
            Dormir
          </button>
        </li>
        <li>
          <h1 className={styles.titleExercise}>Exercícios</h1>
          <button
            className={styles.buttonRun}
            onClick={() => {
              alert('Correu!')
            }}
          >
            Correr
          </button>
          <button
            className={styles.buttonJump}
            onClick={() => {
              alert('Pulou!')
            }}
          >
            Pular corda
          </button>
        </li>
      </ul>
    </main>
  )
}

export default Main
