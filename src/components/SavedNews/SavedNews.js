import styles from "./SavedNews.module.css";
import Grid from "@mui/material/Grid";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


export default function SavedNews({data}) {
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
                <SavedNewsCard
                  image={article.savedImage}
                  title={article.savedTitle}
                  date={article.savedDate}
                  content={article.savedContent}
                  details={article.savedDetails}
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
