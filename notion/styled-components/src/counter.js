import styled from 'styled-components'

export default function Counter({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <Input type="text" />
      <Button onClick={() => setCounter((counter) => counter + 1)}>+</Button>
      <Button onClick={() => setCounter((counter) => counter - 1)}>-</Button>
    </>
  )
}

const Input = styled.input`
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
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 4px;
  margin: 5px;
`
