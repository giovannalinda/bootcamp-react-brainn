export default function CapsLock(props) {
  const textoInserido = props.children
  const textoEmCapslock = textoInserido

  return (
    <div>{textoEmCapslock}</div>
  )
}

function Pagina() {
  return <CapsLock>Show!!!</CapsLock>
}

export {Pagina }
