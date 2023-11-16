interface Info {
  country: string;
}

interface Country {
  officialName: string;
  currency?: string;
  capital?: string;
  region?: string;
  map?: string;
}

const InfoHolder = async (props: Info) => {
  const response = await fetch(
    "https://restcountries.com/v3.1/alpha/" + props.country,
    { cache: "no-cache" }
  );
  const info = await response.json();

  const country: Country = {
    officialName: info[0].name.official,
  };

  return (
    <>
      <div>Name: {country.officialName}</div>
    </>
  );
};

export default InfoHolder;
