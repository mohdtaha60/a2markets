import Home from "./Pages/Home";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trading from "./Pages/Trading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="font" style={{ overflowX: "hidden" }}>
      {loading === false ? (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/trading-platforms" exact component={Trading} />
            </Switch>
          </BrowserRouter>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
