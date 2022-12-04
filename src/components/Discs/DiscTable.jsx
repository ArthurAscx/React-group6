import { useEffect, useState} from "react";
import axios from "axios";



function DiscTable (){

  const DiscsData = [
    {
      title: "Test Disc Data",
      length: "123",
      rating: "5",
      categories: ["Drama", "Comedia"],
      awards: 2,
    },
  ];

  let initialState = DiscsData
  let [discs, setDiscs] = useState(initialState)

    useEffect(()=>{
    axios.get("http://localhost:3000/api/discs/all")
      .then((res) => {
        setDiscs(
          res.data.data
        );
      });
  },[])
  
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Ventas</th>
            <th>Genero</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {discs.map((row) => {
            return (
              <tr key={row.title}>
                <td>{row.title}</td>
                <td>{row.price}</td>
                <td>{row.sales}</td>
                {/* <td>
                  <ul>
                    {row.categories.map((name) => {
                      return <li key={name}>{name}</li>;
                    })}
                  </ul>
                </td> */}
                <td>{row.genre?.name || "---------"}</td>
                <td>{row.releaseYear}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Titulo</th>
            <th>Duracion</th>
            <th>Rating</th>
            <th>Genero</th>
            <th>Premios</th>
          </tr>
        </tfoot>
      </table>
    );
  }



export default DiscTable;
