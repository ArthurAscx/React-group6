import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar"
import ContentUp from "./ContentUp"
import DiscTable from "./Discs/DiscTable";
import LastDisc from "./LastDisc";
import Genres from "./Genres/Genres";
function RouterApp() {

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
        <BrowserRouter>
            <div id="wrapper">
                <Sidebar />
                <div id="content">
                <Topbar
                firstName={user.firstName}
                lastName={user.lastName}
                avatar={user.avatar}
                />
                <ContentUp/>
                <DiscTable/>
                </div>
                <Routes>
                    <Route path={"/"} element={<ContentUp />} />
                    <Route path={"/ultimo"} element={<LastDisc />} />
                    <Route path={"/generos"} element={<Genres />} />
                    <Route path={"/discos"} element={<DiscTable />} />
                    {/* <Route path={"*"} element={<BrowserRouter />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouterApp;