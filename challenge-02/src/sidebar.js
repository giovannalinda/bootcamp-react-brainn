export default function Sidebar(props) {
  console.log(props.articles)

  return (
    <aside className="sidebar">
      <ul>
        {props.articles.map(article => (
          <li key={article.id}>
            <a href={article.title}>{article.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}