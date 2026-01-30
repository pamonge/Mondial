import { CardListComponents } from '../components/newsBlog/CardsListComponents'
import appStyles from '../styles/appStyles'
import { BlogTitleComponent } from '../components/newsBlog/BlogTitleComponent'
// Página principal del blog que muestra el título y la lista de noticias
export const NewsPage = () => {
  return (
    <div className={appStyles.div}>
      <BlogTitleComponent />
      <CardListComponents />
    </div>
  )
}

