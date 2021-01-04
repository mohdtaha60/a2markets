import Home from "./Pages/Home";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div style={{overflowX:"hidden"}}>
      {loading === false ? (
        <div className="App">
          <Home />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
