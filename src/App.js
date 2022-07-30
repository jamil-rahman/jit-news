import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TopHeadlines from "./pages/TopHeadlines/TopHeadlines";
import ReadLater from "./pages/ReadLater/ReadLater";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/top" element={<TopHeadlines />} />
        <Route exact path="/saved" element={<ReadLater />} />
      </Routes>
    </Router>
  );
}

export default App;
