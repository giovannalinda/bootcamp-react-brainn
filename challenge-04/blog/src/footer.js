import styled from 'styled-components'

export default function Footer() {
  return (
    <footer>
      <Paragraph>&copy; Feito com  por Giovanna</Paragraph>
    </footer>
  )
}

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: var(--white);
  margin-left: 35vw;
  margin-top: 100px;
`