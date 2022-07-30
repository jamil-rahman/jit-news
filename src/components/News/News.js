import styles from "./News.module.css";
import Grid from "@mui/material/Grid";
import NewsCard from "../NewsCard/NewsCard";
import { convertFromISOStringToLocaleDate } from "../../utils/convertDate";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function News({ data }) {
  return (
    <div className={styles.container}>
      {data ? (
        <>
          <Grid container spacing={12}>
            {data.map((article) => (
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
