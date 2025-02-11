import { GiCandleLight } from "react-icons/gi";

function Navbar() {
  return (
    <div className="flex justify-start items-center py-7 pl-5  border-b-2">
      <p className="text-white text-2xl font-bold flex justify-center items-center">
        Pulwama <GiCandleLight />
      </p>
    </div>
  );
}

export default Navbar;
