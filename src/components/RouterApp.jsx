import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import DiscTable from "./Discs/DiscTable";
import LastDisc from "./LastDisc";
import Genres from "./Genres/Genres";
import AllContent from "./AllContent"


function RouterApp() {
    return (
        <BrowserRouter>
            <div id="wrapper">
                <Sidebar />
                <Routes>
                    <Route path={"/"} element={<AllContent />} />
                    <Route path={"/ultimo"} element={<LastDisc />} />
                    <Route path={"/generos"} element={<Genres />} />
                    <Route path={"/discos"} element={<DiscTable />} />
                    <Route path={"*"} element={<AllContent />} />
                </Routes>
                </div>
        </BrowserRouter>
    )
}

export default RouterApp;