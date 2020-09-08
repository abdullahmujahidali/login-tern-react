import React from "react";
import Login from "./Login";

var isLoggedin = false;
const currentTime = new Date();

function App() {
  return (
    // isLoggedin ? <h1> Hello </h1> : <Login />
    <div className="container">{currentTime > 12 && <h1>Hello World?</h1>}</div>
  );
}

export default App;
