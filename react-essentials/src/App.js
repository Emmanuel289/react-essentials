import "./App.css";

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
      <p>We sell {props.adjective} cars at cool prices</p>
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
      <Main adjective="vintage" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
