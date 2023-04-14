import React, { useState, useEffect } from "react";
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locations, setLocations] = useState([]);
  // const [locations, setLocations] = useState([]);
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

  // useEffect(() => {
  //   setLatitude(JSON.parse(window.localStorage.getItem('latitude')))
  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem('latitude', latitude)
  // });



  function getLocation(setLatitude, setLongitude) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        const newLocation = { latitude, longitude };
        setLocations([...locations, newLocation]);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className="container">
      <p>You clicked {count} times</p>
      <div className="clickButton">
        <button onClick={() => { getLocation(setLatitude, setLongitude); setCount(count + 1) }}>
          Click me
        </button>
        <div className="clearButton">
          <button onClick={() => { setLatitude(null); setLongitude(null); setCount(0) }}>
            Click to clear
          </button>
        </div>
        {latitude && longitude && (
          <p className="location">Latitude: {latitude}, Longitude: {longitude}</p>
        )}
      </div>
    </div>
  );
}

export default App;
