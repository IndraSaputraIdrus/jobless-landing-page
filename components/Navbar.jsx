import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";

const navList = ["Home", "Discover", "Post a Job", "Contact Us"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <header className="container mx-auto mt-7 2xl:mt-14">
      <nav className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Jobless</h2>
        <ul className="hidden md:flex md:space-x-11">
          {navList.map((list) => (
            <li key={list}>
              <a
                className={`block transition duration-300 ${
                  list === active
                    ? "font-medium text-black"
                    : "text-base text-black/70"
                }`}
                key={list}
                href="#"
                onClick={() => setActive(list)}
              >
                {list}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block">
          <a
            className="block py-3 px-6 rounded border border-black/20 text-sm transition duration-300 hover:bg-slate-800 hover:text-white hover:border-slate-800"
            href="#"
          >
            Sign Up
          </a>
        </button>
        <button className="block md:hidden">
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}
