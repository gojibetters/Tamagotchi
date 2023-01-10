import styles from './index.module.css'

function Input({ type, placeholder, value, submit, change, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={change}
      onSubmit={submit}
      name={name}
    />
  )
}

export default Input
