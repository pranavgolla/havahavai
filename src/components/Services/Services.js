import React, { useState } from "react";
import "./Services.css";
import { FaUpload } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };


  return (
    <div>
      <h1>Services</h1>
      <p>Lost & found</p>
      <div className="line-break"></div>

      <div className="servicesc1">

      <div className="servicesslectedc1">
        <div className="servicesnamec1">
          <label htmlFor="textInput">Service Name</label>
          <input
            type="text"
            id="textInput"
            placeholder="Type here..."
            disabled
            value="Lost & Found"
          />
        </div>

        <div className="servicesnamec1">
          <label htmlFor="options">Category</label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="servicesnamec1">
          <label htmlFor="options">Sub Category</label>
          <select
            id="options"
            value={selectedOption1}
            onChange={handleOptionChange1}
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <label className="upload-btn1">
          <input
            type="file"
            accept="image/*"
            // onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <FaUpload /> Upload Image
        </label>

        <div className="switchc1">
          <label>
            <input
              type="checkbox"
              checked={switchOn}
              onChange={toggleSwitch}
              style={{ display: "none", width: "26px", height: "14px" }}
            />
            <FontAwesomeIcon
              icon={switchOn ? faToggleOn : faToggleOff}
              className="switch-icon"
            />
          </label>
          <p>Show Image</p>
        </div>
        <div className="servicesnamec1">
          <label htmlFor="textInput">Description</label>
          <input
            type="text"
            id="textInput"
            placeholder="Type here..."
            style={{width:"392px"}}
          />
        </div>
      </div>

      <button className="servicessave">Save</button>

      </div>

      <p>Lounge</p>
      <div className="line-break"></div>
      <p>Money Exchange</p>
      <div className="line-break"></div>



    </div>
  );
};

export default Services;
