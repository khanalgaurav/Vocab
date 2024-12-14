import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Vocab = () => {
  return (
    <div className="w-screen flex justify-center mt-2">
      <div className="text-left">
        <Link to={"/"}>
          <img src={logo} alt="Logo vocab" />
        </Link>
      </div>
    </div>
  );
};

export default Vocab;
