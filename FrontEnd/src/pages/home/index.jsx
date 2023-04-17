import React from 'react'

import NavBar from '../../components/navBar'
import Cards from '../../components/cards'
import CreateCardForm from '../../components/cardConfig/createCardForm';
import CreateCardModal from '../../components/cardConfig/createCardModal';
import ObservationsCard from '../../components/observations/observationsCard';

const page = {
    marginLeft: '23vw',
    display: 'flex'
}

function Home() {
    
  return (
    
    <div>
      <NavBar/>
      <div style={page}> 
        <div>
          <CreateCardForm>Nova 1:1</CreateCardForm>
        </div>
        <ObservationsCard/>
      </div>
    </div>
  )
}

export default Home