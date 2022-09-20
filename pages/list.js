import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card";
import data from "../data.json";

function list({ institutions, address }) {
  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>

      <div className="w-full max-w-[1000px] px-4 md:px-12 md:py-6 flex flex-col gap-4">
        <div className="font-semibold text-xl ">
          {address.includes(undefined)
            ? "Instituciones"
            : `Instituciones cercanas a ${address}`}
        </div>

        {institutions?.map((institution) => (
          <Card
            key={institution.key}
            name={institution.name}
            slug={institution.slug}
            image={institution.image}
            address={institution.address}
            phoneNumber={institution.phoneNumber}
            web={institution.web}
            days={institution.days}
            timetable={institution.timetable}
            categories={institution.categories}
          />
        ))}
      </div>
    </div>
  );
}

function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

export function getServerSideProps({ query }) {
  const MAX_DISTANCE = 1500;
  const { lat, lng, route, street_number } = query;
  const address = route + " " + street_number;
  // search the related institutions
  const institutions = data.filter((institution) => {
    if (!lat || !lng) return institution;

    const distance =
      getDistance(
        +lat,
        +lng,
        institution.direction.lat,
        institution.direction.lng
      ) * 100000;
    // Get the nearest paths
    if (distance < MAX_DISTANCE) return institution;
  });

  return {
    props: {
      institutions,
      address,
    },
  };
}

export default list;
