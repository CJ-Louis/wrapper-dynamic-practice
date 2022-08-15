import { useContext, useState } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export const Match = () => {
  const [match, setMatch] = useState(false);
  // const revealMatch = (sign) => {
  //   if (match){
  //     return <div>Your match is {sign.match}</div>
  //   }
  //   else return <div>????</div>
  // }
  const { sign } = useContext(HoroscopeContext);
  return (
    <>
      {/* <button onClick={(e) => setMatch(true)}>
        {revealMatch(sign)}
      </button> */}
      <button onClick={(e) => setMatch(!match)}>
        {match ? "Hide Match" : "Reveal Match"}
      </button>
      {match && <div>{sign.match}</div>}
    </>
  );
};
