import styled from 'styled-components'

export default function Content({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.main`
  margin-left: 35vw;
  margin-top: 30px;
  max-width: 500px;
  display: grid;
  grid-gap: 16px;
  color: var(--white);

  h1 { 
    font-weight: 900;
    font-size: 48px;
    color: var(--pink);
  }

  p { 
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  }
`