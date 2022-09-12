import NavBar from "../../components/NavBar/NavBar";
import data from "../../data.json";

function Institution({ institutionData }) {
  console.log("institutionData", institutionData);
  return (
    <div className="max-w-[1400px] ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <div className="bg-gray-100 flex flex-col sm:flex-col m-12 w-1/2 shadow-md overflow-hidden">
        <div className="bg-red-100 h-48">Imagen</div>
        <div className="h-screen">
          <h2>titulo</h2>
          <ul className="leading-loose">
            <li>Dirección: {}</li>
            <li>Teléfono: {}</li>
            <li>Días de atención: {}</li>
            <li>Horario: {}</li>
          </ul>
          <div className="text-justify m-8">Info de fundación: {}</div>
        </div>
      </div>
    </div>
  );
}

export default Institution;

export const getStaticPaths = () => {
  const institutionUrls = data.map(
    (institution) => `/institution/${institution.slug}`
  );
  console.log("institutionUrls", institutionUrls);
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
