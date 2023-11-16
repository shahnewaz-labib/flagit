import Image from "next/image";

interface Info {
  country: string;
}

interface Country {
  officialName: string;
  currency?: string;
  capital?: string;
  region?: string;
  map?: string;
  flag: string;
  population: string;
  demonyms?: string;
}

const InfoHolder = async (props: Info) => {
  const response = await fetch(
    "https://restcountries.com/v3.1/alpha/" + props.country,
    { cache: "no-cache" }
  );
  const info = await response.json();

  const country: Country = {
    officialName: info[0].name.official,
    flag: info[0].flags.svg,
    capital:
      info[0].name.official === "State of Palestine"
        ? info[0].capital[1]
        : info[0].capital[0],
    region: info[0].subregion,
    population: info[0].population,
    demonyms: info[0].demonyms.eng.f,
  };

  console.log(country.demonyms);

  return (
    <>
      <div className="flex p-40">
        <div className="w-1/4 p-6">
          <Image src={country.flag} width={400} height={500} alt="A flag" />
        </div>
        <div className="w-1/2 p-6 font-mono">
          <div className="text-3xl">{country.officialName}</div>
          <div>
            A country in <b>{country.region}</b> with <b>{country.capital}</b>{" "}
            as its capital.
          </div>
          <div>
            {country.population} people live there and are called{" "}
            <b>{country.demonyms}</b>.
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHolder;
