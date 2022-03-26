import React from "react";
import Product from "./components/Product";
import Counter from "./components/Counter.js";


const handleAddToCartClick = (title) => {
  alert("Add TO Cart Clicked for " + title);
};

function App() {
  return (
    <div>
      <h1 style={{backgroundColor: "aqua"}}>Component Example</h1>
      <Counter />
      <Product title = "Audi"price ="400" onAddTOCart={handleAddToCartClick}/>
      <Product title = "civic" price= "600"onAddTOCart={handleAddToCartClick}/>
      <Product title = "suzuki" price= "500" onAddTOCart={handleAddToCartClick}/>
      
    </div>
  );
}

export default App;
