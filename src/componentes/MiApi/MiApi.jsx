

import React from 'react';
import { useState, useEffect } from 'react';
import Buscador from '../Buscador';
import './MiApi.css';

// 1 - Constantes
export default function MiApi() {
  const API_KEY = 'a2fee76310mshf6fbdd91216cb8ep1bb156jsn128258abf7c0';
  const API_HOST = 'free-to-play-games-database.p.rapidapi.com';
  const iconWindows = 'fa-brands fa-windows fa-lg';
  const iconBrowser = 'fa-solid fa-window-maximize fa-lg';

// 2 - Estado de componentes
  const [dataGames, setDataGames] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

// 3 - Función que consulta la API
  const consultarApi = () => {
    const url = `https://${API_HOST}/api/games`;
    const options = {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    }; 
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setDataGames(data))
      .catch((error) => {
        console.log('error');
      });
  };

// 4 - Llamamos a la función consultarApi al momento de montar el componente
  useEffect(() => {
    consultarApi();
  }, []);

// 5 - Función ordenarPor 
  function ordenarPor(game1, game2) {
    if (sort === 'az') {
      return game1.title.localeCompare(game2.title);
    }
    if (sort === 'za') {
      return game2.title.localeCompare(game1.title);
    }
  }

// 6 - Renderizado de juegos
  const showGames = dataGames
    .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))
    .sort(ordenarPor)
    .map((game) => (
      <div key={game.id} className="col">
        <div className="card h-100">
          <a href={game.game_url} title="Más detalles">
            <img
              src={game.thumbnail}
              className="card-img-top"
              alt={'Foto' + game.title}
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{game.title}</h5>
            <p className="card-text">
              {game.short_description.slice(0, 50) + '...'}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary" title="Fecha lanzamiento">
              {game.release_date}
            </small>
            <small className="text-body-secondary">
              <i
                className={
                  game.platform === 'Web Browser' ? iconBrowser : iconWindows
                }
                title={game.platform}
              ></i>
            </small>
          </div>
        </div>
      </div>
    ));

// 7 - Retorno del componente: 
  return (
    <main>
      <Buscador searchGames={setSearch} sortGames={setSort} />
      <div className="games row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
        {showGames}
      </div>
    </main>
  );
}
