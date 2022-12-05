import {useEffect, useState} from "react";
import axios from "axios";

import Topbar from "./TopBar"
import ContentUp from "./ContentUp"
import DiscTable from "./Discs/DiscTable";

function AllContent() {

  let initialState = {}
  let [user, setUser] = useState(initialState)
  useEffect(() => {
    let lastU = async function () {
      await axios.get("http://127.0.0.1:3000/api/users/all")
        .then(res=>{
          let theU = res.data.data
          setUser(
            theU[theU.length - 1]
          )
        })
      }
      lastU()
    }, []);



  return (
    <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                <Topbar
                firstName={user.firstName}
                lastName={user.lastName}
                avatar={user.avatar}
                />
                <ContentUp/>
                <DiscTable/>
                </div>
    </div>
  );
}

export default AllContent;


