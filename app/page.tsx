import InfoHolder from "./components/InfoHolder";
import { getRandomCode } from "./utils";

export default function Home() {
  const code = getRandomCode();
  console.log(code);

  return (
    <>
      <InfoHolder country={code} />
    </>
  );
}
