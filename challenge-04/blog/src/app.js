import { useState } from 'react'
import GlobalStyle from './styles/global'
import { articles } from './mocks/articles'
import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'

function App() {
  const [title, setTitle] = useState(articles[0].title)
  const [content, setContent] = useState(articles[0].content)
  
  function handleOpenArticle(event, article) {
    event.preventDefault()
    setTitle(article.title)
    setContent(article.content)
  }
  
  return ( 
    <div>
      <GlobalStyle />
      <Header />
      <Menu />
      <Sidebar articles={articles} onOpenArticle={handleOpenArticle}/>
      <Content>
        <h1>{title}</h1>
        {content}
      </Content>
      <Footer />
    </div>
  )
}

export default App