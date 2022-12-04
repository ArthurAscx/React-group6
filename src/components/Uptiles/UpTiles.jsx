import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import axios from "axios";


function UpTiles() {
  
  const [Genres, setGenres] = useState(null);
  const [Artists, setArtists] = useState(null);
  const [Discs, setDiscs] = useState(null);
  const [Users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/api/discs/all")
    .then(data => {
      setDiscs({
        key: 3,
        title: "Total Discs on DB",
        quantity: data.data.total,
        color: "purple",
        icon: "fa-globe",
      })
    });
    axios.get("http://127.0.0.1:3000/api/artists/all")
    .then(data => {
      setArtists({
        key: 2,
        title: "Total Artists on DB",
        quantity: data.data.total,
        color: "purple",
        icon: "fa-globe",
      })
    });
    axios.get("http://127.0.0.1:3000/api/genres/all")
    .then(data => {
      setGenres({
        key: 1,
        title: "Total Genres on DB",
        quantity: data.data.total,
        color: "peru",
        icon: "fa-globe",
      })
    });
    axios.get("http://127.0.0.1:3000/api/users/all")
    .then(data => {
      setUsers({
        key: 5,
        title: "Total Users on DB",
        quantity: data.data.total,
        color: "peru",
        icon: "fa-globe",
      })
    })
    
  }, [])

  const data = []
  if ( Discs ) data.push(Discs);
  if ( Artists) data.push(Artists);
  if ( Genres ) data.push(Genres);
  if ( Users ) data.push(Users);

  return (
    <div className="row">
      {data.map((card) => {
        return (
          <React.Fragment key={card.key}>
          <Tile
            title={card.title}
            quantity={card.quantity}
            color={card.color}
            icon={card.icon}
          />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default UpTiles;
