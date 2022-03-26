import React from "react";
import Product from "./components/Product";
import Counter from "./components/Counter.js";

const handleAddToCartClick = (title) => {
  alert("Add TO Cart Clicked for " + title);
};

function App() {
  return (
    <div>
      <h1 style={{ backgroundColor: "aqua" }}>Component Example</h1>
      <Counter />
      <Product title="Audi" price="400" onAddTOCart={handleAddToCartClick} />
      <Product title="civic" price="600" onAddTOCart={handleAddToCartClick} />
      <Product title="suzuki" price="500" onAddTOCart={handleAddToCartClick} />
    </div>
  );
}

export default App;

/*
import React from "react";

import Product from "./components/Product";
import Counter from "./components/Counter";
const handleAddToCartClick = (title) => {
  alert("Add TO Cart Clicked for " + title);
};
function App() {
  const [count, setCount] = React.useState(5);
  const handleIncrement = () => {
    console.log("increment called");
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "aqua" }}>Components Example</h1>
      // within counter we called it .
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Product
        title="Audi"
        price="400"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
      <Product
        title="Civic"
        price="600"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
      <Product
        price="500"
        title="Suzuki"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
    </div>
  );
}
export default App;
*/
