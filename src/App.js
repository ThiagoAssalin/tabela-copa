import UserProvider from "./contexts/selecoes";
import React from "react";
import{BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";

import Rotas from './routes'


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header/>
        <Rotas/>
      </BrowserRouter>
    </UserProvider>
    
  );
}

export default App;
