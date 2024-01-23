import React, { useState } from "react";
import data from "./utils/imag.json";
import "./index.css";
import ImageComponent from "./ImageComponent";

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <main>
      <h1>Image Gallery</h1>
      <div className="container">
        <ImageComponent data={data} />
      </div>
    </main>
  );
}

export default App;
