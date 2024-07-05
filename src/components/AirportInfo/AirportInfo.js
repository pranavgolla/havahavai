import React, { useState } from "react";
import Header from "../Header/Header";
import Sider from "../Sider/Sider";
import { useLocation } from "react-router-dom";
import "./AirportInfo.css";
import Terminals from "../Terminals/Terminals";
import Services from '../Services/Services'

const AirportInfo = () => {
  const location = useLocation();
  const data1 = location.state;
  const { airport } = data1;

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className="homec1">
        <Sider />
        <div className="airportc1">
          <h1 className="airportinfom"><span className="airportinfomh">Airport&gt;</span>{airport.name} </h1>
          <h1 className="airportinfomainheading"> {airport.name}</h1>

          <div>
            <div className="tab-list">
              <div
                className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                Terminals
              </div>
              <div
                className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                Transport
              </div>
              <div
                className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                Contact details
              </div>
            </div>


            <div className="tab-content">
              {activeTab === "tab1" && (
                <div>
                  <Terminals />
                </div>
              )}
              {activeTab === "tab2" && (
                <div>
                  <p>Transport</p>
                </div>
              )}
              {activeTab === "tab3" && (
                <div>
                  <p>Contact details</p>
                </div>
              )}
            </div>
          </div>

          <Services/>

        </div>
      </div>
    </div>
  );
};

export default AirportInfo;
