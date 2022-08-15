import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  console.log("Component is rendering");
  const { setCurrentSign } = useContext(HoroscopeContext);
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={(e) => setCurrentSign(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
