import FlagHolder from "./components/FlagHolder";
import InfoHolder from "./components/InfoHolder";
import { getRandomCode } from "./utils";

export default function Home() {
  const code = getRandomCode();
  console.log(code);

  return (
    <>
      <FlagHolder country={code} theme="shiny" />
      <InfoHolder country={code} />
    </>
  );
}
