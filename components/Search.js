import { useState } from "react";
import Button from "../components/Button";
import AutoComplete from "react-google-autocomplete";
import { useRouter } from "next/router";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

function Search() {
  const router = useRouter();
  const [direction, setDirection] = useState();

  console.log("direction", direction);
  const handlePlaceSelected = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setDirection({ lat, lng });
    console.log("setdirection", direction);
  };

  return (
    <div className="flex flex-col gap-5 sm:gap-12 w-full items-center text-center">
      <div className="text-3xl  sm:text-5xl uppercase font-bold">
        ¿Quieres donar y no sabes dónde?
      </div>
      <div className="text-lg">
        Consulta las instituciones más cercanas de donde te encuentras.
      </div>

      <form
        onSubmit={(e) => {
          console.log("e", e);
          e.preventDefault();
          router.push({ pathname: "/list", query: direction });
          // TODO: Do the search and redirect to the correct page.
          // Use the direction state, to redirect the user to the correct page.
        }}
        className="flex justify-between gap-2 w-full h-full"
      >
        <AutoComplete
          apiKey={GOOGLE_API_KEY}
          onPlaceSelected={handlePlaceSelected}
          className="rounded-lg px-2 py-1  w-full border border-solid border-gray-200  transition ease-in-out focus:border-input-border-focus focus:outline-none hover:border-input-border-hover focus:shadow-input-focus"
          options={{
            types: ["address"],
          }}
        />
        <Button type="submit">Buscar</Button>
      </form>
    </div>
  );
}

export default Search;
