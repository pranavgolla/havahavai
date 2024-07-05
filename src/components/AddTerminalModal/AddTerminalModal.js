import React, { useState } from "react";
import "./AddTerminalModal.css";
import { FaUpload } from "react-icons/fa6";

const AddTerminalModal = ({ onClose, onSave }) => {
  const [terminalData, setTerminalData] = useState({
    image: null,
    titlename: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTerminalData({
      ...terminalData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setTerminalData({
        ...terminalData,
        image: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(terminalData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <input
          type="text"
          name="titlename"
          value={terminalData.titlename}
          onChange={handleInputChange}
          placeholder="Terminal title"
          style={{ borderWidth:"0px",fontWeight:"bolder",color:"black"}}
        />
        <div className="line-break"></div>

        <textarea
          name="description"
          value={terminalData.description}
          onChange={handleInputChange}
          placeholder="Description"
          style={{ borderWidth:"0px",fontWeight:"-moz-initial",color:"black"}}

        />

        <div className="uploadandcountinue">
          <label className="upload-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none"}}
            />
            <FaUpload /> Upload Image
          </label>

          <div className="modal-buttons">
            <button onClick={onClose}>Cancel</button>
            <button onClick={handleSave}>Countinue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTerminalModal;
