import styled from 'styled-components'

export default function Sidebar({articles, onOpenArticle}) {
  return (
    <Container>
      <ul>
        {articles.map(article => (
          <li key={article.id} onClick={(event) => onOpenArticle(event, article)}>
            <a href={article.title}>{article.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.aside`
  max-width: 25vw;
  padding: 45px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--shape);

  a {
    display: block;
    color: var(--pink);
    text-decoration: none;
  }

  li + li {
    margin-top: 16px;
  }
`

