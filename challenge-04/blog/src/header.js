import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
     <h1>B. Academy</h1>
    </Container>
  )
}

const Container = styled.header`
  h1 {
    margin-top: 50px;
    justify-content: center;
    color: var(--white);
    font-size: 50px; 
    margin-left: 35vw;
  }
`