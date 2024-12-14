import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { FaHome, FaStar } from "react-icons/fa";
("react-icons");
type Props = {
  name: string;
};

const Navbar = ({ name }: Props) => {
  return (
    <div className="flex justify-between  fixed bottom-0 w-full bg-navbar py-1 rounded-t-2xl  text-white">
      <div className="">
        <ul className="flex justify-between w-screen items-center font-bold">
          <div className="w-1/5">
            <NavLink
              to={"/warmup"}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#666c74]"}`
              }
            >
              <div className="text-center flex flex-col items-center justify-center  px-4 py-2 ">
                <FaStar className="text-4xl font-bold text-green-500" />
                <li className="text-md font-medium">Easy</li>
              </div>
            </NavLink>
          </div>
          <div className="w-1/5">
            <NavLink
              to={"/intermediate"}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#666c74]"}`
              }
            >
              <div className="text-center flex flex-col items-center justify-center px-4 py-2 ">
                <FaStar className="text-4xl font-bold text-yellow-600" />
                <li className="text-md font-medium">Medium</li>
              </div>
            </NavLink>
          </div>
          <div className="w-1/5">
            <NavLink to={"/"}>
              <div className="text-center flex flex-col items-center justify-center text-white rounded-full bg-blue-500 px-4 py-2 ">
                <CiHome className="text-5xl font-bold" />
                {/* <li className="text-md font-medium">Home</li> */}
              </div>
            </NavLink>
          </div>
          <div className="w-1/5">
            <NavLink
              to={"/hard"}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#666c74]"}`
              }
            >
              <div className="text-center flex flex-col items-center justify-center px-4 py-2 ">
                <FaStar className="text-4xl font-bold text-red-700" />
                <li className="text-md font-medium">Hard</li>
              </div>
            </NavLink>
          </div>
          <div className="w-1/5">
            <NavLink
              to={"/highfrequencygre"}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-[#666c74]"}`
              }
            >
              <div className="text-center flex flex-col items-center justify-center  px-4 py-2 ">
                <FaStar className="text-4xl font-bold text-white" />
                <li className="text-md font-medium">GRE</li>
              </div>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
