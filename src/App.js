import logo from "./logo.svg";
import "./App.css";
import { images } from "./db/images";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [background, setBackground] = useState();

  // const bgImage = images[0].image;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const bgImage = images[randomIndex].image;
    setBackground(bgImage);
  });

  return (
    <div className="App" style={{ backgroundImage: `url("${background}")` }}>
      {" "}
      <Home />
    </div>
  );
}

export default App;
