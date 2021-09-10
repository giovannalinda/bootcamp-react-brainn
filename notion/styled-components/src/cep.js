import styled from 'styled-components'

export default function Cep({ cep, setCep, color }) {
  function handleSubmit(event) {
    event.preventDefault()
    setCep(
      event.target.elements.campoCep.value
    )

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <MeuInput type='text' name='campoCep' color={color} />
        <Button type='submit'>Buscar cep</Button>
      </form>
    </>
  )
}
  const MeuInput = styled.input`
    background: ${(props) => props.color};
    border: none;
    color: white;
  `

  const Button = styled.button`
  color: pink;
  background: red;
  border: none;
  `


  //function Input({type, name, color}) {
  //  return <input type={type} name={name} style={{ backgroundColor: color }}/>
  //}
