import React from "react";

import { useState } from 'react'
import CreateCardModal from '../createCardModal/index'
import api from "../../../services/api";

const button = ({ width, height, background, color, borderRadius }) => {

  const styleButton = {
    width: width,
    height: height,
    background: background,
    color: color,
    borderRadius: borderRadius
  }

  return styleButton;
}

const styleButton = {
  width: '176px',
  height: '45px',
  background: '#476EE6',
  color: '#fff',
  borderRadius: '60px',
  border: '1px solid'
};

const filters = {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '2px',
    marginRight: '8px'
};

const filter = {
  width: '110px',
  height: '34px',
  background: 'rgb(71, 110, 230)',
  color: 'rgb(255, 255, 255)',
  borderRadius: '60px',
  border: '1px solid',
};

const search = {
  width: '200px',
  height: '34px',
  border: '1px solid #ccc',
  borderRadius: '20px',
  padding: '0 4px',
  marginRight: '8px'
}

const buttonsTop = {
  display: 'flex',
  alignItems: 'center',
  width: '550px',
  height: '100%',
  marginTop: '30px'
}

function CreateCardForm(props) {
  const [openModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState("")
  const [dateStart, setDateStart] = useState("")
  const [dateEnd, setDateEnd] = useState("")
  const [organizer, setOrganizer] = useState("")
  const [guest, setGuest] = useState("")

  async function createUser(e) {
    e.preventDefault();
    try {
      const data = {
        title,
        // dateStart,
        // dateEnd,
        organizer,
        guest
      };

      await api.post("/card", data);
      // console.log(response.data)

      // alert(`${userName} você foi cadastrado com sucesso!`);

    } catch (err) {
      alert(`Houve um problema: ${err}`);
    }
  }


  return (
    <div>
      <div style={buttonsTop}>
        <div style={filters}>
            <button style={filter}>1:1 agendadas</button>
            <button style={filter}>1:1 realizadas</button>
        </div>
        <input style={search} type="text" placeholder="Pesquisar" />
        <button style={styleButton} onClick={() => setOpenModal(true)}>
          {props.children}
        </button>
      </div>

      <CreateCardModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <form type="submit">
          <label htmlFor="">Titulo da reunião: </label>
          <input
            type="text"
            name="title"
            required
            id="title"
            onChange={(e) => { setTitle(e.target.value) }}
          /><br />

          <label htmlFor="">Inicio da Reunião: </label>
          <input
            type="time"
            name="dateStart"
            required
            id="dateStart"
            onChange={(e) => { setDateStart(e.target.value) }}
          /><br />

          <label htmlFor="">Final da Reunião: </label>
          <input
            type="time"
            name="dateEnd"
            required
            id="dateEnd"
            onChange={(e) => { setDateEnd(e.target.value) }}
          /><br />

          <label htmlFor="">Organizador: </label>
          <input
            type="text"
            name="organizer"
            required
            id="organizer"
            onChange={(e) => { setOrganizer(e.target.value) }}
          /><br />

          <label htmlFor="">Participante: </label>
          <input
            type="text"
            name="guest"
            required
            id="guest"
            onChange={(e) => { setGuest(e.target.value) }}
          /><br />

          <button style={styleButton} onClick={createUser}>Criar</button>
        </form>
      </CreateCardModal>
    </div>
  )
}

export default CreateCardForm
