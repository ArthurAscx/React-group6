import axios from "axios"
import React, { useState, useEffect } from "react";

function LastDisc() {
  let initialState = {
    artwork: "default-image.png"
  }
  let [lastDisc, setDisc] = useState(initialState)

  useEffect(() => {
    let lastD = async function () {
      await axios.get("http://127.0.0.1:3000/api/discs/all")
        .then(res=>{
          let theD = res.data.data
          setDisc(
            theD[theD.length - 1]
          )
        })
      }
      lastD();
    }, []);
    
  return (
    <div className="col-lg-6 mb-4" key={lastDisc.idDisc}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last disc in DB
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h2>Titulo: {lastDisc.title}</h2>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "40rem" }}
              src={"http://localhost:3000/img/productos/"+lastDisc.artwork}
              alt=" Artwork disco"
            />
          </div>
          <p>
            Descripcion: {lastDisc.description}
          </p>
          <p>
            Año de lanzamiento: {lastDisc.releaseYear}
          </p>
          <p>
            Ventas Totales: {lastDisc.sales}
          </p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastDisc;
