function App() {
  return (
   <div>
      <Title>Titulo</Title>
      <Sidebar />
      <Section />
   </div>
  )
}

function Title({ children }) {
  return (
    <h1>{children}</h1>
  )
}

function Title2({ children }) {
  return (
    <h2>{children}</h2>
  )
}

function Sidebar() {
  return (
    <aside>
      <Title2>Sidebar</Title2>
    </aside>
  )
}

function Section() {
  return (
    <section>
      <h2>Conteúdo</h2>
      <p>parágrafo</p>
    </section>
  )
}

export default App