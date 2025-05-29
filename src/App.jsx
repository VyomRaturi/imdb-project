import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";
import Navbar from "./Components/Navbar";
import MovieContextWrapper from "./Components/MovieContextWrapper";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <MovieContextWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </MovieContextWrapper>
    </Provider>
  );
}

export default App;
