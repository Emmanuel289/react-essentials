import "./App.css";

// Header component
function Header() {
  return (
    <header>
      <h1>Welcome to Emm's Garage</h1>
    </header>
  );
}

// Main component
function Main() {
  return (
    <section>
      <p>We sell the most exotic cars at the best prices</p>
    </section>
  );
}

// Footer component

function Footer() {
  return (
    <footer>
      <p>Give us a call at +1-800-800-800</p>
    </footer>
  );
}

// Root component that contains all the declared components
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
