import React from 'react'
import { CardListComponents } from '../components/newsBlog/CardsListComponents'
import appStyles from '../styles/appStyles'
export const NewsPage = () => {
  return (
    <div>
      <div className="flex flex-col p-5 gap-3">
        <h1 className={appStyles.title}>BLOG MONDIAL</h1>
      </div>
      <CardListComponents />
    </div>
  )
}

