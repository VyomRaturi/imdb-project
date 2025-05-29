import axios from "axios";
import MovieSlice from "./movieSlice";

const actions = MovieSlice.actions;

const fetchMiddleware = (pageNo) => {
  return (dispatch) => {
    dispatch(actions.movieLoading(true));
    axios
       .get(
         `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
       ).then((response) => {
        const movieData = response.data.results;
        dispatch(actions.movieData(movieData));
       }).catch((error) => {
        console.log(error);
        dispatch(actions.movieError())
       }).finally(() => {
        dispatch(actions.movieLoading(false));
       });
  };
};

export default fetchMiddleware;