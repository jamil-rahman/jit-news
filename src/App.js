import { useEffect } from 'react';
import styles from './App.module.css';
import NewsContext from './context/NewsContext';
import HomePage from './pages/HomePage/HomePage';


function App() {

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
