import React from "react";
import './cards.css';
import axios from 'axios';

import api from "../../services/api";
import EditCardModal from "../cardConfig/editCardModal";

function Cards(
  { id, title, dateStart, dateEnd, organizer, guest }, //Identificadores do Card
  {display, flexDirection, padding, marginTop, gap, width, border, borderRadius}) // Estilo do corpo do Card 
{

  const cardBody = {
    display: display || 'flex',
    flexDirection: flexDirection || 'column',
    padding: padding || '20px',
    marginTop: marginTop || '20px',
    gap: gap || '10px',
    width: width || '400px',
    border: border || '1.5px solid #476EE6',
    borderRadius: borderRadius || '10px'
  }

  const informationsCard = {display: 'flex', justifyContent: 'space-between', alignItems: 'center'}

  const date = {fontSize: '14px', color: '#476ee6'}

  const participants = {display: 'flex', justifyContent: 'space-between'}
  const responsability = {}
  const participant = {display: 'flex'}

  return (
    <div>
      <div style={cardBody}>
        <div style={informationsCard}>
          <div>
            <h3 className="title">1:1 {title}</h3>
            <h3 style={date}>13/11/2023 - {dateStart} - {dateEnd}</h3>
          </div>
          <EditCardModal id={id}/>
        </div>
        <hr />
        <div style={participants}>
          <h3 style={responsability}>Organizador</h3>
          <h3 className="participant">{organizer}</h3>
        </div>
        <div style={participants}>
          <h3 style={responsability}>Convidado</h3>
          <h3 className="participant">{guest}</h3>
        </div>
      </div>

      
    </div>
  )
}

export default Cards