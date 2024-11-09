import { useState } from "react";
import { navLinks } from "../assets/constants/index.js";
import { MenuScale } from "iconoir-react";
import SignUpButton from "./SignUpButton.jsx";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="py-6 px-20  absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <h1 className="font-roboto text-heading font-bold text-left text-primary">
          Collers
        </h1>

        <div className="relative flex items-center">
          <button onClick={toggleMenu} className="lg:hidden">
            <MenuScale className="w-6 h-6 -rotate-180 text-primary" />
          </button>
          <ul className="hidden lg:flex flex-1 justify-end items-center gap-4">
            {navLinks.map((item) => (
              <NavItem key={item.label} item={item} onClick={handleLinkClick} />
            ))}
            <SignUpButton />
          </ul>

          {isOpen && (
            <ul className=" items-center justify-start absolute top-full right-0 w-40 rounded-md bg-white z-50 flex flex-col gap-3 lg:hidden">
              {navLinks.map((item) => (
                <NavItem key={item.label} item={item} onClick={handleLinkClick} />
              ))}
              <SignUpButton />
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ item, onClick }) => (
  <li>
    <a
      href={item.href}
      className="font-roboto leading-normal text-nav-text text-primary p-2"
      onClick={onClick}
    >
      {item.label}
    </a>
  </li>
);

export default Nav;
