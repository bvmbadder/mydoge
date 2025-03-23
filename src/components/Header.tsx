import logo from "../assets/mydodge.webp";
import { Link } from "react-router-dom";
import { PiTwitterLogoDuotone } from "react-icons/pi";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { useState } from "react";
function Header() {
  const navLinks = [
    { name: "Reviews", path: "/" },
    { name: "Functionalities", path: "/functionalities" },
    { name: "FAQ", path: "/faq" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-gray-100">
      <div className="container mx-auto py-4 px-4 lg:px-0 flex flex-col">
        <div className="flex flex-row items-center justify-between w-full">
          <Link to="/" className="w-[120px] lg:w-[164px] cursor-pointer">
            <img src={logo} alt="logo" className="" sizes="164px" />
          </Link>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <BiX className="size-8" />
              ) : (
                <BiMenuAltLeft className="size-8" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex flex-row items-center gap-6">
            <div className="flex items-center gap-6 text-[#666666] font-light">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-orange-900 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button className="bg-[#1e2327] font-semibold text-sm text-white px-4 py-2 rounded-full flex items-center gap-3">
              Follow <PiTwitterLogoDuotone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? "h-auto opacity-100 py-6" : "h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 text-[#666666] font-light flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-orange-900 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button className="bg-[#1e2327] font-semibold text-sm text-white px-4 py-2 rounded-full flex items-center gap-3">
              Follow <PiTwitterLogoDuotone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
