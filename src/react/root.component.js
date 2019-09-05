import React from "react";

//const App = () => <h1>Hello from React</h1>
const ulStyle = {
  display: "flex",
  height: "25px",
  backgroundColor: "black"
};

const liStyle = {
  color: "white",
  marginRight: "20px",
  listStyle: "none"
};

const App = () => {
  return (
    <div>
      <h1>React Component:</h1>
      <ul style={ulStyle}>
        <li style={liStyle}>Vehicles</li>
        <li style={liStyle}>Shopping</li>
        <li style={liStyle}>Ownership</li>
        <li style={liStyle}>Experience Nissan</li>
        <li style={liStyle}>Nissan Connect</li>
      </ul>
      <div>
        Just showing a header which has been built using React to show React app
        integration in single-spa
      </div>
    </div>
  );
};

export default App;
