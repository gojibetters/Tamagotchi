import styles from './index.module.css'
import close from '../../assets/close.png'
import reset from '../../assets/tamagotchi_reset.png'

function Reset(props) {
  function clearLocalStorage() {
    localStorage.removeItem('@tamagotchi')
    alert('Resetado com sucesso')
  }

  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <img
          src={close}
          alt=""
          className={styles.close}
          onClick={() => {
            props.handleShowCardReset(false)
          }}
        />
        <div className={styles.title}>
          <img src={reset} alt="" />
        </div>

        <p className={styles.messageUp}>Você realmente quer resetar?</p>
        <p className={styles.messageDown}>Essa ação é irreversível!</p>

        <div className={styles.containerButton}>
          <button
            className={styles.buttonReset}
            type="button"
            onClick={clearLocalStorage}
          >
            Resetar
          </button>

          <button
            className={styles.buttonCancel}
            type="button"
            onClick={() => {
              props.handleShowCardReset(false)
            }}
          >
            Cancelar
          </button>
        </div>
      </span>
    </div>
  )
}

export default Reset
