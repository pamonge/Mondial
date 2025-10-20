import React from 'react'
import { CardListComponents } from '../components/newsBlog/CardsListComponents'

import { BlogTitleComponent } from '../components/newsBlog/BlogTitleComponent'
// Página principal del blog que muestra el título y la lista de noticias
export const NewsPage = () => {
  return (
    <div>
      <BlogTitleComponent />
      <CardListComponents />
    </div>
  )
}

