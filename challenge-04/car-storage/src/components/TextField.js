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
  width: 376px;
  height: 52px;
  background: var(--dark-gray);
  border-radius: 10px;
  border: none;
  outline: none;
  color: var(--white);
  padding: 0 0 0 10px;
  margin: 0 0 20px 0;

  &[type="color"] {
    height: 52px;
    width: 376px;
    background: none;
    border: none;
  }
`