
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Map from "../../../assets/world-map.png";

function SectionD() {
  return (
    <div
      className="flex items-center justify-center p-4 md:p-8 lg:p-12"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="relative">
        <img
          src={Map}
          alt="World Map"
          className="w-full max-w-xs md:max-w-2xl lg:max-w-3xl"
        />
        <div className="relative bg-white border-x-4 -top-40 md:-top-52 lg:-top-64 w-full max-w-sm md:max-w-md lg:max-w-lg p-4 md:p-6 lg:p-8 border-colorA shadow-xl">
          <h1 className="text-center text-lg md:text-xl lg:text-2xl font-semibold space-y-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 animate-pulse text-blue-600"
            />
            Bliss Technology
          </h1>
          <ul className="list-none flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 lg:gap-14">
            <li className="flex items-center">Address..</li>
            <li>+91 2334567890</li>
          </ul>
          <ul className="list-none flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 lg:gap-24 mt-4">
            <li className="flex items-center">City</li>
            <li>Bliss@tech.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionD;
