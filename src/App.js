import React  from "react";
import {BrowserRouter as Router  , Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeProvider } from 'styled-components'
import {GlobalStyle} from './GlobalStyle'
import TopHeader from "./components/TopHeader";

const theme = {
  dark: '#000',
}



function App() {
  
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <Router >
      <TopHeader/>
      <Navbar/>
      
      <Routes>
        
      <Route path = '/home' exact  element = {<Home/>}/>
      <Route path = '/hot-deals' exact  element = {<div>aloo</div>}/>
      <Route path = '/categories' exact  element = {<Home/>}/>
      <Route path = '/smartphones' exact  element = {<Home/>}/>
      <Route path = '/cameras' exact  element = {<Home/>}/>
      <Route path = '/accessories' exact  element = {<Home/>}/>
      <Route  path = "*" exact element = {
        <h1>404 Error</h1>}>
      </Route>
      </Routes>
        
    </Router>
    </ThemeProvider>
  );
}

export default App;
