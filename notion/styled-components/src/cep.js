import style from './cep.module.css'

export default function Cep({ cep, setCep }) {
  function handleSubmit(event) {
    event.preventDefault()
    setCep(
      event.target.elements.campoCep.value
    )

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={style['input-cep']} type='text' name='campoCep' />
        <button type='submit'>Buscar cep</button>
      </form>
    </>
  )
}