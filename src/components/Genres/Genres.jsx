import { useEffect, useState } from "react";
import GenreCard from "./GenreCard";
import axios from "axios"


function addProperty (array, property) {
  array.forEach(function (item) {
  if (!item.hasOwnProperty(property)) {
      item[property] = 0; 
  }
})
return array;
}

function Genres() {
  let initialState = []
  let [genres, setGenres] = useState(initialState)

    useEffect(()=>{
    axios.get("http://localhost:3000/api/genres/all")
      .then((res) => {
        let {totalByGenre} = res.data;
        addProperty(res.data.data, "total")
        res.data.data[0].total = totalByGenre.genre1
        res.data.data[1].total = totalByGenre.genre2
        res.data.data[2].total = totalByGenre.genre3
        res.data.data[3].total = totalByGenre.genre4
        res.data.data[4].total = totalByGenre.genre5
        res.data.data[5].total = totalByGenre.genre6
        res.data.data[6].total = totalByGenre.genre7
        res.data.data[7].total = totalByGenre.genre8
        setGenres(
            res.data.data    
      );
      });
    },[])
    
    console.log(genres);

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
