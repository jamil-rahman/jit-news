import { createContext, useEffect, useState } from "react";

//const key = "831f11f5a7cb44e78053ec5ec7c56012";
const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const getNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=831f11f5a7cb44e78053ec5ec7c56012`
    );
    // res2= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey=831f11f5a7cb44e78053ec5ec7c56012")
    const data = await res.json();
    setNews(data.articles)
    console.log(data.articles);
  };

  useEffect(()=>{
    getNews();
  },[])

return(
    <NewsContext.Provider value={{news, searchTerm}}>
        {children}
    </NewsContext.Provider>
)
};

export default NewsContext;