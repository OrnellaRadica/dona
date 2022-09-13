import React from "react";
import data from "../data.json";

function list({ institutions }) {
  console.log("institutions", institutions);
  return <div>{institutions.map((i) => i.name)}</div>;
}

function getDistance(x1, y1, x2, y2) {
  console.log({ x1, y1, x2, y2 });
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

export function getServerSideProps({ query }) {
  const MAX_DISTANCE = 500;
  const { lat, lng } = query;

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
    console.log("distance", distance);
    // Get the nearest paths
    if (distance < MAX_DISTANCE) return institution;
  });

  return {
    props: {
      institutions,
    },
  };
}

export default list;
