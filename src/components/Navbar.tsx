import { Link } from "react-router-dom";
import cupolaLogo from "../assets/cupola-logo-detailed.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 md:left-1/2 md:top-8 md:right-auto md:transform md:-translate-x-1/2 z-50 w-full md:w-[100vw] md:max-w-[672px]">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-none md:rounded-3xl h-16 md:h-20 w-full flex flex-row items-center justify-between px-4 md:px-8 py-3 md:py-0">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={cupolaLogo} alt="Cupola Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex gap-6 text-md text-[#FFF4B9] opacity-75 font-medium pl-2 md:pl-0">
          <Link to="/open-source" className="hover:underline">
            Open Source
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
