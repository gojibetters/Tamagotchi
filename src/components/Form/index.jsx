import React, { useState } from 'react'
import styles from './index.module.css'
import Input from '../Input'

function Form(props) {
  const defaultValues = {
    classe: '',
    especie: '',
    alimentacao: '',
    respiracao: '',
    pele: '',
    habitat: '',
    movimentacao: ''
  }

  const [tamagotchi, setTamagotchi] = useState(defaultValues)

  const handleInputChange = e => {
    const { name, value } = e.target

    setTamagotchi({
      ...tamagotchi,
      [name]: value
    })
  }

  function localTamagotchi() {
    localStorage.setItem('@tamagotchi', JSON.stringify(tamagotchi))

    setTamagotchi({
      classe: '',
      especie: '',
      alimentacao: '',
      respiracao: '',
      pele: '',
      habitat: '',
      movimentacao: ''
    })

    alert('Criado com sucesso!')
  }

  return (
    <form>
      <Input
        type="text"
        placeholder="Classe"
        value={tamagotchi.classe}
        change={handleInputChange}
        name="classe"
      />
      <Input
        type="text"
        placeholder="Espécie"
        value={tamagotchi.especie}
        change={handleInputChange}
        name="especie"
      />
      <Input
        type="text"
        placeholder="Alimentação"
        value={tamagotchi.alimentacao}
        change={handleInputChange}
        name="alimentacao"
      />
      <Input
        type="text"
        placeholder="Respiração"
        value={tamagotchi.respiracao}
        change={handleInputChange}
        name="respiracao"
      />
      <Input
        type="text"
        placeholder="Pele"
        value={tamagotchi.pele}
        change={handleInputChange}
        name="pele"
      />
      <Input
        type="text"
        placeholder="Habitat"
        value={tamagotchi.habitat}
        change={handleInputChange}
        name="habitat"
      />
      <Input
        type="text"
        placeholder="Movimentação"
        value={tamagotchi.movimentacao}
        change={handleInputChange}
        name="movimentacao"
      />

      <div className={styles.containerButton}>
        <button
          className={styles.buttonCancel}
          type="button"
          onClick={() => {
            props.handleShowCard(false)
          }}
        >
          Cancelar
        </button>

        <button
          className={styles.buttonCreate}
          type="button"
          onClick={localTamagotchi}
        >
          Criar
        </button>
      </div>
    </form>
  )
}

export default Form
