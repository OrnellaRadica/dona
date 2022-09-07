import { useState } from "react";
import Button from "../components/Button";

function Search() {
  const [direction, setDirection] = useState();
  return (
    <div className="flex flex-col gap-12 w-full items-center text-center">
      <div className="text-5xl uppercase font-bold">
        ¿Quieres donar y no sabes dónde?
      </div>
      <div className="text-lg">
        Consulta las instituciones más cercanas de donde te encuentras.
      </div>

      <form
        onSubmit={(e) => setDirection(e.target.value)}
        className="flex justify-between gap-2 w-full h-full"
      >
        <input
          className="rounded-lg px-2 py-1  w-full border border-solid border-gray-200  transition ease-in-out focus:border-input-border-focus focus:outline-none hover:border-input-border-hover focus:shadow-input-focus"
          type="text"
          value={direction}
          placeholder="Pon tu dirección"
        />
        <Button type="submit">Buscar</Button>
      </form>
    </div>
  );
}

export default Search;
