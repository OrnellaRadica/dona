
function Card() {
  return (
    <div className="flex flex-row w-3/6 h-48 pt-4 pr-3 bg-white scroll-p-1 shadow-md">
      <div className="w-56">imagen</div>
      <div className="w-full">
        <h2><a href="#">Nombre Fundación</a></h2>
        <ul className="leading-loose">
          <li>Dirección</li>
          <li>Días y horarios</li>
        </ul>
        <div className="grid grid-cols-2 mt-8">
          <div className="">Botón Tlf</div>
          <div className=""><a href="#">Enlace pág web</a></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
