import styles from "./News.module.css";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import NewsCard from "../NewsCard/NewsCard";
import { convertFromISOStringToLocaleDate } from "../../utils/convertDate";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function News() {
  const { news } = useContext(NewsContext);
  console.log(news);
  return (
    <div className={styles.container}>
      {news ? (
        <>
          <Grid container spacing={12}>
            {news.map((article) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                key={Math.random()}
                style={{ display: "flex" }}
              >
                <NewsCard
                  image={article.urlToImage}
                  title={article.title}
                  date={convertFromISOStringToLocaleDate(article.publishedAt)}
                  url={article.url}
                  content={article.content}
                  details={article.description}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
