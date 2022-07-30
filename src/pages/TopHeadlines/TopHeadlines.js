import React, { useContext } from 'react'
import FilterTabs from '../../components/FilterTabs/FilterTabs'
import News from '../../components/News/News'
import NewsContext from '../../context/NewsContext'

export default function TopHeadlines() {
  const {news} =  useContext(NewsContext);
  console.log(news);
  return (
    <>
     <FilterTabs />
     <News data={news}/>
    </>
  )
}
