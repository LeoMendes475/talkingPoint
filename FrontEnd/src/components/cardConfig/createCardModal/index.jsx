import React, {useState, useEffect} from 'react'
import './createCardModal.css'

import Cards from '../../cards/index'
import api from '../../../services/api'

//Estilos dos componentes
const button = ({width,height, background, color,borderRadius, border}) => {

  const styleButton = {
    width: width,
    height: height,
    background: background,
    color: color,
    borderRadius: borderRadius,
    border: border
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

const background_style = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const modal_style = {
  width: '500px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '60px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black'
}
//Termino dos estilos dos componentes

export default function CreateCardModal({ isOpen, setModalOpen, children }) {

  const [showCard, setShowCard] = useState([]);

  // const handleButtonClick = () => {
  //   const newComponent = console.log('Novo componente gerado!');
  //   setShowCard([...showCard, newComponent]);
  // };


  useEffect(() => {
    async function getCards() {
      const { data } = await api.get("/card");

      setShowCard(data.cards)
    }

    getCards()
  }, [])

  const renderNewCard = () => {
    return showCard.map((card) => (
    
      <Cards key={card.id} id={card.id} title={card.title} dateStart={card.dateStart} dateEnd={card.dateEnd} organizer={card.organizer} guest={card.guest}/>
    ));
  };

  if (isOpen) {
    return (
      <div>
        <div style={background_style}>
          <div style={modal_style}>
            <div className='close-button' onClick={setModalOpen}>
              x
            </div>
            <div>{children}</div>

            {/* <button style={button(styleButton)} onClick={handleButtonClick} type='submit'>Criar Reunião</button> */}
            <button style={button(styleButton)} onClick={setModalOpen}>Fechar</button>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {renderNewCard()}
    </div>
  )
}