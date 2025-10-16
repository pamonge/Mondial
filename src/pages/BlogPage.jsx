import React from 'react'
<<<<<<< Updated upstream:src/pages/BlogPage.jsx

export const BlogPage = () => {
=======
import { CardListComponents } from '../components/newsBlog/CardsListComponents'
import appStyles from '../styles/appStyles'
export const NewsPage = () => {
>>>>>>> Stashed changes:src/pages/NewsPage.jsx
  return (
    <div>
      <div flex flex-col p-5 gap-3>
        <h1 className={appStyles.title}>BLOG MONDIAL</h1>
      </div>
      <CardListComponents />
    </div>
  )
}

