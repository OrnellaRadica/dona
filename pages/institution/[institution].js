import NavBar from "../../components/NavBar/NavBar";
import data from "../../data.json";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import Map from "../../components/Map";
import {  useLoadScript } from '@react-google-maps/api';


import Image from "next/image";

function Institution({ institutionData }) {
  const router = useRouter();
  const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY});

  return (
    <div className="max-w-[1400px] ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <button
        onClick={() => router.back()}
        className="bg-primary-light h-12 flex flex-row items-center w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-primary w-4 h-4 ml-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
        <div className="ml-1 font-semibold">
          <a href="#"> Volver al listado</a>
        </div>
      </button>
      <div className="flex flex-col lg:flex-row p-4">
        <div className="basis-6/12 w-full ">
          <Image
            width="100%"
            height="80%"
            objectFit="cover"
            layout="responsive"
            src={institutionData.image}
            alt="Imagen de la institución"
          />
        </div>

        <div className="basis-6/12 p-6">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="uppercase font-bold">{institutionData.name}</h2>
              <ul className="leading-loose">
                <li>Dirección: {institutionData.address}</li>
                <li>Teléfono: {institutionData.phoneNumber}</li>
                {institutionData.days ? (
                  <li>Días de atención: {institutionData.days}</li>
                ) : null}
                {institutionData.timetable ? (
                  <li>Horario: {institutionData.timetable}</li>
                ) : null}
              </ul>

              <div className="text-justify">{institutionData.information}</div>
            </div>

            <div className="flex justify-end gap-4">
              <Button ariaLabel="Telefono" hasLink>
                <a href={`tel:${institutionData.phoneNumber}`}>Llamar</a>
              </Button>

              <Button ariaLabel="sitio web" variant="empty" hasLink>
                <a href={institutionData.web} target="_blank" rel="noreferrer">
                  Sitio web
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isLoaded ?  <Map 
      typeMarker="unique"
      direction={institutionData.direction}
      /> : <div>cargando</div>}
    </div>
  );
}

export default Institution;

export const getStaticPaths = () => {
  const institutionUrls = data.map(
    (institution) => `/institution/${institution.slug}`
  );

  return {
    paths: institutionUrls,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const slug = params.institution;
  const institutionData = data.find((i) => i.slug === slug);

  if (!institutionData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      institutionData,
    },
  };
};
