import H1 from './h1'
import Button from './button'

export default function Header() {
  return (
    <header className="header">
     <H1>B. Academy</H1>
     <Button kind="Inscrever-se"></Button>
     <Button kind="Ver requisitos"></Button>
    </header>
  )
}