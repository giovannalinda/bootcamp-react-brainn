import styled from 'styled-components'

export default function Counter({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <Input type="text" />
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </>
  )
}

const Input = styled.input`
  background: red;
  color: white;
`