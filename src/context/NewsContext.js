import { createContext, useEffect, useState } from "react";
import axios from "axios";

//const key = "831f11f5a7cb44e78053ec5ec7c56012";
const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(null);

  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";
  const apiKey2 = "831f11f5a7cb44e78053ec5ec7c56012";

  //default api request
  const getNews = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
    // res2= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey=831f11f5a7cb44e78053ec5ec7c56012")
    //   const data = await res.json();
  };

  //saerch api request
  const getSearchResults = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=22&apiKey=${apiKey}`
      )
      .then((response) => setNews(response.data.articles))
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategorizedResults = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`
      )
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  };

  //getting search term from searchbar
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setSearchTerm("");
  };

  // useEffect(() => {
  //   getSearchResults();
  //   return()=>{
  //     getNews();
  //   }
  // }, [query]);

  // useEffect(() => {
  //   getNews();
  // }, []);

  // useEffect(()=>{
  //   getCategorizedResults();
  // },[category])

  return (
    <NewsContext.Provider
      value={{ news, setSearchTerm, searchTerm, getSearch, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
