import { useState } from "react";

function Search() {
  const [direction, setDirection] = useState();
  return (
    <div>
      <div>¿Quieres donar y no sabes dónde?</div>
      <div>
        Busca aquí las instituciones más cercanas que acepten ropa, juguetes,
        alimentos o muebles.
      </div>
      <form onSubmit={(e) => setDirection(e.target.value)}>
        <input
          className="border rounded-lg px-2"
          type="text"
          value={direction}
        />
        <button type="submit">buscar</button>
      </form>
    </div>
  );
}

export default Search;
