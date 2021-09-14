import styled from 'styled-components'
import TextField from './TextField'
import Button from './Button'

export default function Form(props) {
  return (
    <form {...props}>
      <Title>Registrar um novo carro</Title>

      <TextField 
        id="image"
        placeholder="Imagem" 
        type="url"
        name="image"
      />

      <TextField 
        id="brandModel"
        placeholder="Modelo"
        name="brandModel"
      />

      <TextField 
        id="year"
        placeholder="Ano"
        name="year"
        type="number"
      />

      <TextField 
        id="plate"
        placeholder="Placa"
        name="plate"
        pattern="[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}"
      />

      <TextField 
        id="color"
        name="color"
        type="color"
      />

      <SubmitButton 
        type="submit"
      >
        Cadastrar
      </SubmitButton>
    </form>
  )
}

const Title = styled.h1`
  color: var(--white);
  padding: 20px;
`

const SubmitButton = styled(Button)`
  width: 480px;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
`