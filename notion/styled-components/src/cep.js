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
    background: white;
    color: black;
    width: 200px;
    height: 20px;
    border: none;
    border-radius: 4px;
    padding: 4px;
    margin: 5px;
  `

  const Button = styled.button`
    color: white;
    background: black;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 4px;
    margin: 5px;
  `


  //function Input({type, name, color}) {
  //  return <input type={type} name={name} style={{ backgroundColor: color }}/>
  //}
