import { useState, useEffect, useRef } from "react";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import clsx from "clsx";

const navList = ["Home", "Discover", "Post a Job", "Contact Us"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("touchstart", handler);
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [navRef]);

  return (
    <header className="container mx-auto">
      <nav className="px-4 md:px-0 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Jobless</h2>
        <ul
          ref={navRef}
          className={clsx(
            "fixed inset-y-0 left-0 z-10 md:static",
            "transition duration-300",
            "w-56 px-5 py-7 space-y-5 md:w-auto md:space-y-0 md:p-0",
            "bg-white md:bg-transparent",
            "flex flex-col md:flex-row md:space-x-11",
            !menu && "-translate-x-full md:translate-x-0"
          )}
        >
          {navList.map((list) => (
            <li key={list}>
              <a
                className={clsx(
                  "block transition duration-300",
                  "hover:bg-black/10 md:hover:bg-transparent md:hover:text-black",
                  "px-4 py-2 rounded md:p-0 ",
                  list === active
                    ? "font-medium text-black bg-black/10 md:bg-transparent"
                    : "text-black/70 "
                )}
                key={list}
                href="#"
                onClick={() => setActive(list)}
              >
                {list}
              </a>
            </li>
          ))}

          <button className="block px-4 md:hidden">
            <a
              className={clsx(
                "block py-3 px-6",
                "rounded border border-black/20",
                "text-sm",
                "transition duration-300",
                "hover:bg-slate-800 hover:text-white hover:border-slate-800"
              )}
              href="#"
            >
              Sign Up
            </a>
          </button>
        </ul>
        <button className="hidden md:block">
          <a
            className={clsx(
              "block py-3 px-6",
              "rounded border border-black/20",
              "text-sm",
              "transition duration-300",
              "hover:bg-slate-800 hover:text-white hover:border-slate-800"
            )}
            href="#"
          >
            Sign Up
          </a>
        </button>
        <button onClick={() => setMenu(!menu)} className="block md:hidden">
          {menu ? (
            <CloseIcon className="h-9 w-9" />
          ) : (
            <MenuIcon className="h-9 w-9" />
          )}
        </button>
      </nav>
    </header>
  );
}
