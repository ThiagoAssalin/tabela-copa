import React from "react";
import { Routes, Route } from "react-router-dom";

import GroupFase from './pages/GroupFase'
import PlayOffs from "./pages/PlayOffs";



export default function Rotas(){
    return(
        <Routes>
            <Route path='/' exact element={<GroupFase/>}/>
            <Route path='/playoffs' element={<PlayOffs/>}/>
        </Routes>
    )
}