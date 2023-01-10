import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import close from '../../assets/close.png'
import infos from '../../assets/tamagotchi_infos.png'
import Input from '../Input'

function Info(props) {
  const [showInfo, setShowInfo] = useState(false)

  const [local, setLocal] = useState([])
  useEffect(() => {
    const getLocalTamagotchi = localStorage.getItem('@tamagotchi')
    setLocal(JSON.parse(getLocalTamagotchi) || [])
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <img
          src={close}
          alt=""
          className={styles.close}
          onClick={() => {
            props.handleShowInfo(false)
          }}
        />
        <div className={styles.title}>
          <img src={infos} alt="" />
        </div>
        <form>
          <Input
            type="text"
            placeholder="Classe"
            value={local.classe}
            name="classe"
          />
          <Input
            type="text"
            placeholder="Espécie"
            value={local.especie}
            name="especie"
          />
          <Input
            type="text"
            placeholder="Alimentação"
            value={local.alimentacao}
            name="alimentacao"
          />
          <Input
            type="text"
            placeholder="Respiração"
            value={local.respiracao}
            name="respiracao"
          />
          <Input
            type="text"
            placeholder="Pele"
            value={local.pele}
            name="pele"
          />
          <Input
            type="text"
            placeholder="Habitat"
            value={local.habitat}
            name="habitat"
          />
          <Input
            type="text"
            placeholder="Movimentação"
            value={local.movimentacao}
            name="movimentacao"
          />

          <div className={styles.containerButton}>
            <button
              className={styles.buttonCancel}
              type="button"
              onClick={() => {
                props.handleShowInfo(false)
              }}
            >
              Cancelar
            </button>

            <button className={styles.buttonCreate} type="button">
              Criar
            </button>
          </div>
        </form>
      </span>
    </div>
  )
}

export default Info
