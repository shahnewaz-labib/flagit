import Image from "next/image";
interface Flag {
  country: string;
  theme: string;
}

const FlagHolder = (props: Flag) => {
  const src =
    "https://flagsapi.com/" + props.country + "/" + props.theme + "/64.png";

  return (
    <div>
      <Image src={src} width={100} height={100} alt="A flag" />
    </div>
  );
};

export default FlagHolder;
