export default function Sidebar({articles, onOpenArticle}) {
  return (
    <aside className="sidebar">
      <ul>
        {articles.map(article => (
          <li key={article.id} onClick={(event) => onOpenArticle(event, article)}>
            <a href={article.title}>{article.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}