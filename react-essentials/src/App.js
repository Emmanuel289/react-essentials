import React from "react";
import "./App.css";
import Car from "./car.jpg";
import { Checkbox } from "./Checkbox";
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Home, Events, Contact, About } from "./pages";

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
      <>
        <h1>Welcome to {data.name}'s Garage</h1>
        <p>We are located at 251 Scenic Way NW {data.location}</p>
        <img alt="black porsche car on the highway" src={Car} height="200px" />
        <p>
          If you would like us to contact you, please click on the checkbox
          below
        </p>
        <Checkbox />
      </>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/events">Events</Link>
//             </li>
//             <li>
//               <Link to="/contacts">Contacts</Link>
//             </li>
//           </ul>
//         </nav>
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/events">
//             <Events />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
