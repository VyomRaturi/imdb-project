import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";
import Navbar from "./Components/Navbar";
import MovieContextWrapper from "./Components/MovieContextWrapper";

function App() {
  return (
    <MovieContextWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </MovieContextWrapper>
  );
}

export default App;
