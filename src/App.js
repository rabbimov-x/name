import React , {useState} from "react";
import {navbar} from './utils/navbar'
import {BrowserRouter as Router  , Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [ data , setData] = useState(navbar)
  return (
    <Router >
      <Navbar/>
      
      <Routes>
        
      <Route path = '/home/*' exact  element = {<Home/>}  />
      <Route  path = "*" exact element = {
        <h1>404 Error</h1>
      }>
      </Route>
      </Routes>
        
    </Router>
  );
}

export default App;
