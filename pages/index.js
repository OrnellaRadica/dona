import NavBar from "../components/NavBar/NavBar";
import Search from "../components/Search";
import classnames from "classnames";
import CategoriesBlock from "../components/CategoriesBlock.js";
import Image from "next/image";

const DEVS = [
  {
    name: "Ornella Radica",
    image: "/images/foto-or.jpg",
  },
  {
    name: "Anna Cammarata",
    image: "/images/foto-ac.jpg",
  },
  {
    name: "Fátima Hardoy",
    image: "/images/foto-fh.jpeg",
  },
  {
    name: "Martín Adegbola",
    image: "/images/foto-ma.jpg",
  },
];
function Home() {
  const container = classnames(
    "w-full md:w-1/2 flex items-center justify-center"
  );

  return (
    <div className="max-w-[1400px] h-screen ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <div className="flex flex-wrap-reverse md:flex-nowrap md:min-h-[calc(100vh-216px)] gap-8 sm:gap-4 w-full px-4 md:px-12 md:py-6">
        <div className={container}>
          <CategoriesBlock />
        </div>
        <div className={container}>
          <Search />
        </div>
      </div>
      <div className="h-0 md:h-[108px]"></div>
      <div className="px-4 py-12 md:px-12 md:py-6 flex flex-col gap-8 items-center justify-center ml-auto mr-auto  max-w-[1000px]">
        <div className="flex flex-col gap-4">
          <div className="text-2xl">¿Quiénes somos?</div>
          <div>
            Un grupo de estudiantes que presentan esta página como parte de su
            proyecto final de curso realizado en la Fundación Esplai, Barcelona.
            <br />
            Hemos orientado nuestro proyecto al cumplimiento de los objetivos
            “hambre cero”, “ciudades y comunidades sostenibles” y “producción y
            consumo responsables” de la nueva agenda de desarrollo sostenible
            pautada para alcanzarse en los próximos 15 años.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl">Good Hands</div>
          <div>
            Surge de la necesidad de facilitar la búsqueda de instituciones
            donde puedas donar todo aquello que ya no usas a personas que lo
            necesitan. Inspirándonos en los problemas que hemos tenido cada uno
            en encontrar las entidades que se encargan de recibir las donaciones
            para las comunidades. Además hacemos que la búsqueda de
            instituciones sea personalizada al lograr localizar las más cercanas
            al usuario.
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {DEVS.map((dev) => (
            <div className="flex flex-col gap-2 items-center">
              <div className="rounded-full w-40 h-40 overflow-hidden">
                <Image
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="responsive"
                  objectPosition="center"
                  src={dev.image}
                  alt={dev.name}
                  style={{
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="font-semibold">{dev.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-0 md:h-[108px]"></div>
    </div>
  );
}
export default Home;
