import React, { useState, useEffect } from "react";
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  //save your count using local storage, getitem first, then setitem
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')))
  }, []);


  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="container">
      <p>You clicked {count} times</p>
      <div className="clickButton">
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <div className="clearButton">
          <button onClick={() => setCount(0)}>
            Click to clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
