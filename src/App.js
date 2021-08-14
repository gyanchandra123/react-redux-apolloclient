import React from "react";
import "./default.scss";
import Header from "./components/Header";
import HomePage from "./pages/homePage";
function App() {
  return (
    <div className="App">
       <Header />
      <div className="main">
      <HomePage/>
      </div> 
    </div>
  );
}

export default App;
