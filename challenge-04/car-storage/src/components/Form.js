import styled from 'styled-components'
import TextField from './TextField'
import Button from './Button'

export default function Form(props) {
  return (
    <form {...props}>
      <Title>Registro de Carros</Title>

      <TextField 
        id="image"
        labelText="Imagem" 
        type="url"
        name="image"
      />

      <TextField 
        id="brandModel"
        labelText="Modelo"
        name="brandModel"
      />

      <TextField 
        id="year"
        labelText="Ano"
        name="year"
        type="number"
      />

      <TextField 
        id="plate"
        labelText="Placa"
        name="plate"
        pattern="[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}"
      />

      <TextField 
        id="color"
        labelText="Cor"
        name="color"
        type="color"
      />

      <SubmitButton 
        type="submit"
      >
        Cadastrar carro
      </SubmitButton>
    </form>
  )
}

const Title = styled.h1`
  color: var(--black);
  padding: 20px;
`

const SubmitButton = styled(Button)`
  width: 415px;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
`