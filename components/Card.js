import Link from "next/link";
import Button from "../components/Button";

function Card({
  name,
  image,
  address,
  phoneNumber,
  web,
  days,
  timetable,
  slug,
}) {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-white scroll-p-1 shadow-md rounded-lg overflow-hidden">
      <div className="">
        <img src={image} alt="imagen de fundación" />
      </div>
      <div className="w-full p-4">
        <h2 className="uppercase underline">
          <Link href={`/institution/${slug}`}>
            <a>{name}</a>
          </Link>
        </h2>
        <ul className="leading-loose">
          <li>Dirección: {address}</li>
          <li>Teléfono: {phoneNumber}</li>
          <li>Días de atención: {days}</li>
          <li>Horario: {timetable}</li>
        </ul>

        <div className="flex gap-4 mt-6">
          <Button ariaLabel="Telefono" hasLink>
            <a href={`tel:${phoneNumber}`}>Llamar</a>
          </Button>
          <div className="">
            <Button ariaLabel="sitio web" variant="empty" hasLink>
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