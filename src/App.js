import  React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./vistas/home/Home"
import Discover from "./vistas/discover/Discover"
import Join from "./vistas/join/Join"
import './styles/matriz.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Discover" element={<Discover/>}/>
            <Route exact path="/Join" element={<Join/>}/>
        </Routes>
       </Router>
       

    </div>
  );
}

export default App;
