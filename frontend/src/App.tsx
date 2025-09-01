import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

type Greeting = {
  id: number;
  name: string;
};

function App() {
  const [greeting, setGreeting] = useState<Greeting>();

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(setGreeting)
      .catch(console.error);
  }, [setGreeting]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting ? (
          <p>Hello David V5 First Try {greeting.name}</p>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;