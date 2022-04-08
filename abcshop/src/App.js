import React from "react";
import {BrowserRouter as Router ,Routes, Route,} from "react-router-dom"
import LandingPage from "./components/LandingPage";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products/Product";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router> 
    <div>
    <TopMenu />
    <LandingPage />

  
    <Routes> 
    <Route path= "/products" component = {Products} />
    <Route path= "/contact-us" component = {ContactUs} />
    <Route path= "/not-found" component = {NotFound} />
    <Route path = "/" component = {LandingPage} />

    {/* <Redirect to= "/not-found" /> */}
    </Routes>
    </div>
    </Router>
  );
}

export default App;
