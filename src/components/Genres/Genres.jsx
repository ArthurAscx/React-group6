import { useEffect, useState } from "react";
import GenreCard from "./GenreCard";
import axios from "axios"

function Genres() {
  let initialState = []
  let [genres, setGenres] = useState(initialState)

    useEffect(()=>{
    axios.get("http://localhost:3000/api/genres/all")
      .then((res) => {
        setGenres(
            res.data.data
        );
      });
    },[])
    



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres DB
          </h5>
        </div>
        <div className="card-body fondoCaja">
          <div className="row">
            {genres.map((genre, index) => (
              <GenreCard key={index + genre.name} genero={genre.name} total={genre.total} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Genres;
