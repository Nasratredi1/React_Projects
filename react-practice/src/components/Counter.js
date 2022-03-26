import React from "react";

const Counter = () => {
  //var count = 5;
  // you cannot directly increase the value react said so you must said to reace
  // that i want to explicitly increase this value
  // {count} if you use in any place that might when click it that might increase or decrease the value.
  const [count, setCount] = React.useState(5);
  const handleIncrement = () => {
    console.log("increment called");
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: "2rem" }}>
      {count}
      <button onClick={handleDecrement}>--</button>
      {count}
      <button onClick={handleIncrement}>++</button>
      {count}
    </div>
  );
};

export default Counter;

// If you want to state up (this counter with all other thing which is below for this you must copy some code and paste to app.js file)
/*
import React from "react";
// we pass handle inc,handle dec,count, as a props

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div style={{ padding: "2rem" }}>
      {count}
      <button onClick={handleDecrement}>--</button>
      {count}
      <button onClick={handleIncrement}>++</button>
      {count}
    </div>
  );
};

export default Counter;

*/
