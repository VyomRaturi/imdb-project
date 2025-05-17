const MovieCard = ({ movieObj }) => {
  return (
    <div
      className={`h-72 rounded-lg w-48 bg-center bg-cover bg-[url(${movieObj.url})] flex items-end hover:scale-110 duration-300`}
    >
      <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900">
        {movieObj.title}
      </div>
    </div>
  );
};

export default MovieCard;
