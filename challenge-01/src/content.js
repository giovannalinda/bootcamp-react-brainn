import H1 from './h1'
import Button from './button'

export default function Content() {
  return (
    <main className="main">
      <H1>Cronograma</H1>
      <p className="goal">
        O objetivo desta semana será nivelar o conhecimento para o Bootcamp. Através de desafios diários, vamos falar sobre os fundamentos da web necessários para utilizar o React: HTML, CSS, features do JS, DOM API, Fetch API, etc.
      </p>
      <p className="participation">
        A sua participação nos desafios dessa semana será fundamental para mostrar o seu engajamento e isto dará visibilidade no processo de seleção para o Bootcamp.
      </p>
      <p className="live">
        Se você não conseguir participar ao vivo, os vídeos ficarão salvos no canal da Twitch, podendo ser acessados depois, durante toda a semana do pré-work. Então não tem desculpa para não fazer os desafios!
      </p>
      <Button kind="secondary">Cronograma</Button>
    </main>
  )
}