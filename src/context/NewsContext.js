import { createContext, useEffect, useState } from "react";
import axios from "axios";

//const key = "831f11f5a7cb44e78053ec5ec7c56012";
const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const apiKey = "831f11f5a7cb44e78053ec5ec7c56012";

  const getNews = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
    // res2= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey=831f11f5a7cb44e78053ec5ec7c56012")
    //   const data = await res.json();
  };

  const getSearchResults = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=831f11f5a7cb44e78053ec5ec7c56012`
      )
      .then((response) => setNews(response.data.articles))
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    getSearchResults();
  }, [query]);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{ news, setSearchTerm, searchTerm, getSearch }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
