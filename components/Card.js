import Button from "../components/Button";

function Card({ name, image, address, phoneNumber, web, days, timetable }) {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-white scroll-p-1 shadow-md rounded-lg overflow-hidden">
      <div className="">
        <img src={image} alt="imagen de fundación" />
      </div>
      <div className="w-full p-4">
        <h2>
          <a href="#">{name}</a>
        </h2>
        <ul className="leading-loose">
          <li>Dirección: {address}</li>
          <li>Teléfono: {phoneNumber}</li>
          <li>Días de atención: {days}</li>
          <li>Horario: {timetable}</li>
        </ul>

        <div className="flex gap-4 mt-6">
          <Button ariaLabel="Telefono">
            <a href={`tel:${phoneNumber}`}>Llamar</a>
          </Button>
          <div className="">
            <Button ariaLabel="sitio web" variant="empty">
              <a href={web} target="_blank">
                Sitio web
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
