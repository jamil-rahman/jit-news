import styles from "./HomePage.module.css";
import News from "../../components/News/News";
import { useContext } from "react";
import NewsContext from "../../context/NewsContext";

export default function HomePage() {
  const { news } = useContext(NewsContext);
  return (
    <div className={styles.home_container}>
      <News data={news}  />
    </div>
  );
}
