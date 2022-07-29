import { useEffect } from 'react';
import styles from './App.module.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  // const getNews = async () =>{
  //   const res = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=831f11f5a7cb44e78053ec5ec7c56012")
  //   // res2= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey=831f11f5a7cb44e78053ec5ec7c56012")
  //   const data = await res.json()
  //   console.log(data);
  // }
// useEffect(()=>{
//   getNews();
// },[])
  return (
    <div className={styles.App}>
     <HomePage />
    </div>
  );
}

export default App;
