import React, { useState } from 'react';
import './editCardModal.css';
import axios from 'axios';

export default function EditCardModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenEditModal = () => {
    setShowModal(true);
  };

  const handleCloseEditModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3333/card/${props.id}`);
      // recarrega os cards após a deleção
      window.location.reload();
      console.log("Card excluido!")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='teste'>
      <button className='open-button' onClick={handleOpenEditModal}><img src="src/images/png/options.png" alt="Options" title="Options"/></button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEditModal}>
              &times;
            </span>
            <p>Ações:</p>
            <button onClick={handleDelete}>Excluir conversa 1:1</button>
          </div>
        </div>
      )}
    </div>
  );
}

