import React, { useContext } from "react";
import NewsContext from "../../context/NewsContext";

export default function FilterTabs() {
  const {setCategory} = useContext(NewsContext)
  return (
    <div className="buttons d-flex justify-content-center my-2 pb-5 m-4">
      <button className="btn btn-outline-dark me-2 rounded" onClick={()=>setCategory("business")}>#business</button>
      <button className="btn btn-outline-dark me-2 rounded" onClick={()=>setCategory("sports")}>#sports</button>
      <button className="btn btn-outline-dark me-2 rounded" onClick={()=>setCategory("general")}>#general</button>
      <button className="btn btn-outline-dark me-2 rounded" onClick={()=>setCategory("entertainment")}>#entertainment</button>
    </div>
  );
}
