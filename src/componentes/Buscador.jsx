import React from 'react';

export default function Buscador({ searchGames, sortGames }) {
  const inputHandler = (e) => {
    if (e.target.name === 'search') {
      searchGames(e.target.value);
    }
    if (e.target.name === 'sort') {
      sortGames(e.target.value);
    }
  };

  return (
    <div className="row m-0 py-4">
      <div className="col-sm-4 mb-4">
        <div className="input-group ">
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            placeholder="Buscar"
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className="col-sm-1 mb-2">
        <div className="input-group">
          <select
            className="form-select"
            id="sort"
            name="sort"
            onChange={inputHandler}
          >
            <option value="">Organizar por:</option>
            <option value="az">(A-Z)</option>
            <option value="za">(Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

