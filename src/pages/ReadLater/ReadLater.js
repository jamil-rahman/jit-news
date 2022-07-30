import { useContext } from "react";
import NewsContext from "../../context/NewsContext";
import styles from "./ReadLater.module.css";
import SavedNews from "../../components/SavedNews/SavedNews";

export default function ReadLater() {
  const { newsArray } = useContext(NewsContext);
  console.log(newsArray);
  return (
    <>
      <SavedNews data={newsArray} />
    </>
  );
}
