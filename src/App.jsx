import Header from './componentes/Header';
import MiApi from './componentes/MiApi/MiApi';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <MiApi />
      <Footer />
    </>
  );
}

export default App;

























/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */



// import React, { useEffect, useState } from 'react';

// const API_KEY = '';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://www.freetogame.com/api/games?sort-by=alfabético`
//       );
//       if (!response.ok) {
//         throw new Error('Failed to fetch weather data');
//       }
//       const data = await response.json();
//       setWeatherData(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (city !== '') {
//       fetchWeatherData();
//     }
//   }, []);

//   const handleSearch = () => {
//     if (city !== '') {
//       fetchWeatherData();
//     }
//   };

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };

//   return (
//     <div>
//       <h2>WeatherApp</h2>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={handleCityChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {loading && <div>Loading ...</div>}
//       {error && <div>Error: {error}</div>}

//       {weatherData && (
//         <div>
//           <h3>{weatherData.name}</h3>
//           <p>Temperature: {weatherData.main.temp} °F</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
