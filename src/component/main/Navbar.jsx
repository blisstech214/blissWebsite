
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/newLogoa.png"; 

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

  
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

    
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
//         isScrolled ? "bg-slate-100 shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="flex justify-between items-center px-4 md:px-16">
//         <div>
//           <img src={logo} alt="Logo" className="w-36 md:w-52 h-auto" />
//         </div>

//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-700 focus:outline-none"
//           >
//             {isOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul
//           className={`absolute md:static md:flex md:gap-16 font-bold font-mono bg-red-600 md:bg-transparent transition-all duration-300 ease-in-out transform ${
//             isOpen ? "translate-y-0" : "-translate-y-full"
//           } md:translate-y-0`}
//         >
//           <li>
//             <Link
//               to="/"
//               className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
//               onClick={() => setIsOpen(false)}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
//               onClick={() => setIsOpen(false)}
//             >
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/service"
//               className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
//               onClick={() => setIsOpen(false)}
//             >
//               SERVICE
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/portfolio"
//               className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
//               onClick={() => setIsOpen(false)}
//             >
//               PORTFOLIO
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
//               onClick={() => setIsOpen(false)}
//             >
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/newLogoa.png"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
        isScrolled ? "bg-slate-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-16">
        <div>
          <img src={logo} alt="Logo" className="w-36 md:w-52 h-auto" />
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`absolute md:static md:flex md:gap-16 font-bold font-mono bg-red-600 md:bg-transparent transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0 w-full md:w-auto`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
              onClick={() => setIsOpen(false)}
            >
              SERVICE
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 transition-colors duration-300 hover:text-colorA"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
