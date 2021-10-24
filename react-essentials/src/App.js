import "./App.css";

// Array of Car models
const cars = [
  "Ford",
  "Ferrari",
  "Mercedez",
  "Toyota",
  "Tesla",
  "Honda",
  "Nissan",
];

// Car objects with keys as the index of a car and values as the car name

const carObjects = cars.map((car, i) => ({ id: i, name: car }));
console.log(carObjects);

// Header component
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>Welcome to {props.name}'s Garage</h1>
    </header>
  );
}

// Main component
function Main(props) {
  console.log(props);
  return (
    <section>
      <p>
        We sell {props.adjective} {props.name} at the coolest prices
      </p>
      <ul style={{ textAlign: "left" }}>
        {props.cars.map((car) => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </section>
  );
}

// Footer component

function Footer(props) {
  return (
    <footer>
      <p>Give us a call at +1-800-800-800</p>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

// Root component that contains all the declared components
function App() {
  return (
    <div className="App">
      <Header name="Emm" />
      <Main name="cars" adjective="exotic" cars={carObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
