import styled from 'styled-components'

export default function TextField({ id, labelText, ...rest }) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <Input id={id} {...rest}/>
    </div>
  )
}

const Input = styled.input`
  padding: 10px;
  margin: 3px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 240px;
  border: none;
  border-radius: 2px;

  &[type="color"] {
    height: 90px;
    width: 150px;
  }
`