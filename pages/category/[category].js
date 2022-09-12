import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card";
import data from "../../data.json";

function Page({ category, institutions }) {
  return (
    <div className="max-w-[1400px] ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <div className="w-full px-4 md:px-12 md:py-6 flex flex-col gap-4">
        {institutions?.map((institution) => (
          <Card
            key={institution.name}
            name={institution.name}
            slug={institution.slug}
            image={institution.image}
            address={institution.address}
            phoneNumber={institution.phoneNumber}
            web={institution.web}
            days={institution.days}
            timetable={institution.timetable}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;

export const getStaticPaths = () => {
  return {
    paths: [
      "/category/ropa",
      "/category/juguetes",
      "/category/alimentos",
      "/category/muebles",
    ],
    fallback: false,
  };
};
export const getStaticProps = ({ params }) => {
  const category = params.category;
  const institutions = data.filter((institution) =>
    institution.categories.includes(category)
  );
  return {
    props: {
      category,
      institutions,
    },
  };
};
