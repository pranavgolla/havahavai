import React, { useState } from 'react';
import './Terminals.css';
import AddTerminalModal from '../AddTerminalModal/AddTerminalModal';

const initialCards = [
  {
    image:
      'https://www.figma.com/file/eEhxefgIu72PuvibELkUIa/image/e6fa4d5a9fa67efdaff0836c6b48500e00b4f1f6',
    titlename: 'Terminal1',
    description: 'Optional meta data should be two lines',
  },
  {
    image:
      'https://www.figma.com/file/eEhxefgIu72PuvibELkUIa/image/e6fa4d5a9fa67efdaff0836c6b48500e00b4f1f6',
    titlename: 'Terminal2',
    description: 'Optional meta data should be two lines',
  },
];

const Terminals = () => {
  const [cards, setCards] = useState(initialCards);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveTerminal = (newTerminal) => {
    // Update state with new terminal
    setCards([...cards, newTerminal]);
    closeModal();
  };

  return (
    <>
      <div className="terminalc1">
        {cards.map((e, index) => (
          <div className="terminalcard" key={index}>
            <img
              src={e.image}
              alt={e.titlename}
              className="terminalcardimage"
            />
            <div className="terminalcardinfo">
              <div className="terminalcardinfoheadingc1">
                <h1 className="terminalcardinfoheading">{e.titlename}</h1>
                <h1 className="terminaldots">...</h1>
              </div>
              <p className="terminalcardinfodescription">{e.description}</p>
            </div>
          </div>
        ))}
        <button className="terminalbutton" onClick={openModal}>
          + Add Terminal
        </button>
      </div>

      {showModal && (
        <AddTerminalModal onClose={closeModal} onSave={handleSaveTerminal} />
      )}
      
    </>
  );
};

export default Terminals;
