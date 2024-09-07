import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MealDetails from "./Components/MealDetails";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <MealDetails />
    </div>
  );
}

export default App;
