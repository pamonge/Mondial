import React from 'react'
import { CardListComponents } from '../components/newsBlog/CardsListComponents'

import { BlogTitleComponent } from '../components/newsBlog/BlogTitleComponent'
export const NewsPage = () => {
  return (
    <div>
      <BlogTitleComponent />
      <CardListComponents />
    </div>
  )
}

