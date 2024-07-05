import React from "react";
import Header from "../Header/Header";
import Sider from "../Sider/Sider";
import "./Airport.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdArrowDown } from "react-icons/io";

const AirportList = [
  {
    name: "Indira Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminal: "3",
  },
  {
    name: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminal: "5",
  },
  { name: "Heathrow Airport", country: "England", code: "LHR", terminal: "6" },
  { name: "Istanbul Airport", country: "Turkey", code: "IST", terminal: "3" },
  {
    name: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminal: "14",
  },
];

const Airports = () => {
  return (
    <div>
      <Header />
      <div className="homec1">
        <Sider />
        <div className="airportc1">
          <div className="airportheadingc1">
            <h1 className="airportheading">Airports</h1>
            <button className="airportbuttonaddnew">Add new</button>
          </div>
          <table>
            <thead>
              <tr>
                <th className="checkbox1">
                  <input type="checkbox" aria-label="Select all airports" />
                </th>
                <th className="allairports1">
                  All Airports
                  <IoMdArrowDown />
                </th>
                <th className="country1">Country</th>
                <th className="code1">Code</th>
                <th className="terminals1">Terminals</th>
              </tr>
            </thead>
            <tbody>
              {AirportList.map((airport, index) => (
                <tr key={index}>
                  <td className="checkbox1">
                    <input
                      type="checkbox"
                      aria-label={`Select ${airport.name}`}
                    />
                  </td>
                  <td className="allairports1">{airport.name}</td>
                  <td className="country1">{airport.country}</td>
                  <td className="code1">{airport.code}</td>
                  <td className="terminals1">{airport.terminal}</td>
                  <td className="write">
                    <Link to={`/airport/${index}`} state={{ airport }}>
                      <FaPencil />
                    </Link>
                  </td>
                  <td className="delete">
                    <RiDeleteBin6Line />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Airports;
