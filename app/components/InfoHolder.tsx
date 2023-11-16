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
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-40">
          <Image src={country.flag} width={400} height={500} alt="A flag" />
        </div>
        <div className="w-1/2 p-40 font-mono">
          <div className="text-xl">{country.officialName}</div>
        </div>
      </div>
    </>
  );
};

export default InfoHolder;
