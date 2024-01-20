import { useState } from "react";
import Menu from "./svg/Menu";
import notionLogo from "../assets/images/Notion-logo.svg.png";
import NotionLogo from "./NotionLogo";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  window.addEventListener("scroll", () => {
    if (setToggle) {
      setToggle(false);
    }
  });

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal border-b md:border-0">
        <a href="#" className="flex items-center nav-link">
          Product
        </a>
      </li>
      <li className="p-1 font-normal border-b md:border-0">
        <a href="#" className="flex items-center nav-link">
          Download
        </a>
      </li>
      <li className="p-1 font-normal border-b md:border-0">
        <a href="#" className="flex items-center nav-link">
          Solutions
        </a>
      </li>
      <li className="p-1 font-normal border-b md:border-0">
        <a href="#" className="flex items-center nav-link">
          Resources
        </a>
      </li>
      <li className="p-1 font-normal border-b md:border-0">
        <a href="#" className="flex items-center nav-link">
          Pricing
        </a>
      </li>
      <li className="p-1 font-normal border-b md:hidden md:border-0">
        <a href="#" className="flex items-center nav-link">
          Request a demo
        </a>
      </li>
      <li className="p-1 font-normal border-b md:hidden md:border-0">
        <a href="#" className="flex items-center nav-link">
          Log In
        </a>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full px-5 py-2 bg-white rounded-none h-max lg:px-8 lg:py-4 navbar">
        <div className="flex justify-between">
          <div className="flex">
            <NotionLogo />
            <div className="hidden mr-4 lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="p-1 font-normal border-b md:border-0">
                  <a href="#" className="flex items-center nav-link">
                    Request a demo
                  </a>
                </li>
                <li className="p-1 font-normal border-b md:border-0">
                  <a href="#" className="flex items-center nav-link">
                    Log In
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1">
              <button className="btn btn-dark">Get Notion Free</button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setToggle(!toggle)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
        <div className="block md:hidden">{toggle && navList}</div>
      </nav>
    </header>
  );
};

export default Navbar;
