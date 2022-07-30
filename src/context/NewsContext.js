import { createContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../utils/useLocalStorage";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(null);
  const [btnState, setBtnState] = useState(false);
  const [btnValue, setBtnValue] = useState(null);

  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";
  const apiKey2 = "831f11f5a7cb44e78053ec5ec7c56012";
  const apiKey3 = "3bb145fcf9ee4e82a4096cad9f5406eb";

  //default api request
  const getNews = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey3}`)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
    // res2= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey=831f11f5a7cb44e78053ec5ec7c56012")
    //   const data = await res.json();
  };

  // search api request
  const getSearchResults = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=100&apiKey=${apiKey3}`
      )
      .then((response) => setNews(response.data.articles))
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategorizedResults = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey3}`
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
  //   return () => {
  //     getNews();
  //   };
  // }, [query]);

  // useEffect(() => {
  //   getNews();
  // }, []);

  // useEffect(()=>{
  //   getCategorizedResults();
  // },[category])

  return (
    <NewsContext.Provider
      value={{
        news,
        setSearchTerm,
        searchTerm,
        getSearch,
        setCategory,
        setBtnState,
        btnState,
        btnValue,
        setBtnValue,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
