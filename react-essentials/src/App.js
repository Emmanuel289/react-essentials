import React, { useState, useEffect } from "react";
import "./App.css";
import Car from "./car.jpg";

const url = `https://api.github.com/users/`;

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login)
      return (
        <div>
          <h1>Provide login info</h1>
        </div>
      );
    setLoading(true);
    fetch(url + `${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading)
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  return (
    <div className="App">
      <h1>Welcome to {data.name}'s Garage</h1>
      <p>We are located at 251 Scenic Way NW {data.location}</p>
      <img alt="black porsche car on the highway" src={Car} height="200px" />
    </div>
  );
}
export default App;
