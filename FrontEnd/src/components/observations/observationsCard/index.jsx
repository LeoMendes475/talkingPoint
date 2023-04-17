import React from "react";

export default function ObservationsCard () {

    const observationsCardBody= {
        width: '400px',
        height: '300px',
        padding: '20px',
        border: '1.5px solid #476EE6',
        borderRadius: '10px',
        marginLeft: '30px',
        marginTop: '94px'
    }

    const observationTitle = { paddingBottom: '20px' }
    const observationsList = { paddingBottom: '10px'}
      

    return (
    <div style={observationsCardBody}> 
        <h3 style={observationTitle}>Talking Points do 1:1</h3>

        <p style={observationsList}>Discutir sobre como podemos evoluir nossos produtos</p>
        <p style={observationsList}>Falar sobre os problemas tecnicos que bem ocorrendo no novos produtos lançados</p>
    </div>
    )
}