import styles from './index.module.css'

function Button({ type, onClick, message, className }) {
  return (
    <button
    
    type={type} onClick={onClick}>
      {message}
    </button>
  )
}

export default Button
