import React, { useState, useEffect } from "react";
import "./App.css";
import Car from "./car.jpg";

const url = `https://api.github.com/users/`;

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url + `${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div className="App">
        <h1>Welcome to {data.name}'s Garage</h1>
        <p>We are located at 251 Scenic Way NW {data.location}</p>
        <img alt="black porsche car on the highway" src={Car} height="200px" />
      </div>
    );
  }
  return <div>No User Data Available</div>;
}
export default App;
