import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { useRef, useEffect } from "react";

const Navbar = ({ isExpanded, toggleNavbar }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      // This is just to demonstrate how the height can be dynamically adjusted
      navRef.current.style.maxHeight = isExpanded
        ? `${navRef.current.scrollHeight}px`
        : "0";
    }
  }, [isExpanded]);
  return (
    <header className="fixed w-full">
      <div className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-4">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <h1 className="text-xl font-bold">MyCareerGrid</h1>
          <button
            type="button"
            onClick={toggleNavbar}
            className="block hover:text-white focus:text-white focus:outline-none sm:hidden shadow-xl"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isExpanded ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded
              ? "pl-4 pb-2 flex flex-col items-start space-y-0 expanded"
              : "hidden pl-4"
          } sm:flex sm:flex-row sm:space-x-6 sm:items-center sm:justify-between sm:pl-0 sm:space-y-0 sm:pb-0 navLinks`}
          ref={navRef}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 font-semibold">
            <li>
              <Link href="/" className="navLink">
                Features
              </Link>
            </li>
            <li>
              <Link href="/" className="navLink">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="navLink">
                About
              </Link>
            </li>
            <li className="contact">
              <Link href="/" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
          <button className="contactButton font-semibold">
            <Link href="/">
              <div className="contactLink">
                <span>+91 998-212-2018</span>
                <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
