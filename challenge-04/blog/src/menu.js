import styled from 'styled-components'

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>Sobre</li>
        <li>Cronograma</li>
        <li>Inscrições</li>
      </ul>
    </Container>
  )
}

const Container = styled.nav`
  color: var(--white);
  display: flex;
  align-items: center;
  margin: 20px 0 0 35vw;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    
    li {
      cursor: pointer;
      display: flex;
      color: var(--white);

      & + li {
        margin-left: 16px;
      }
    }
  }
`