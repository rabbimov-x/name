import React  from "react";
import {BrowserRouter as Router  , Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import YourProduct from "./pages/YourProduct";
import { ThemeProvider } from 'styled-components'
import {GlobalStyle} from './GlobalStyle'
import TopHeader from "./components/TopHeader";
import AllProducts from "./pages/AllProduct";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
const theme = {
  dark: '#000',

}



function App() {
    const state = useSelector((state)=>state.home.footer)  
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <Router >
      <TopHeader/>
      <Navbar/>
      
      <Routes>
      <Route path = '/' exact  element = {<Home/>}/>  
      <Route path = '/home' exact  element = {<Home/>}/>
      <Route path = '/all-products' exact  element = {<AllProducts/>}/>
      <Route path = '/your-products' exact  element = {<YourProduct/>}/>
      <Route path = '/smartphones' exact  element = {<Home/>}/>
      <Route path = '/cameras' exact  element = {<Home/>}/>
      <Route path = '/accessories' exact  element = {<Home/>}/>
      <Route  path = "*" exact element = {
        <h1>404 Error</h1>}>
      </Route>
      </Routes>

      <Footer data = {state}/>
      
        
    </Router>
    </ThemeProvider>
  );
}

export default App;
