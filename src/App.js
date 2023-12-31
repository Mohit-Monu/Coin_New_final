import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Routes from "./Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div >
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
