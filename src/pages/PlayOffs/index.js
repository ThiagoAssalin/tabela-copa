import React from 'react';

import './playoffs.css'
import OitavasDeFinais from '../../components/OitavasDeFinais';
import QuartasDeFinal from '../../components/QuartasDeFinal';
import SemiFinal from '../../components/SemiFinal'
import Final from '../../components/Final'

export default function PlayOffs() {
 return (
   <div className='mataMataContainer'>
        <OitavasDeFinais/>
        <QuartasDeFinal/>
        <SemiFinal/>
        <Final/>
        <div className='campeao'>
          <img src='https://img3.gratispng.com/dy/dc5e38ee2b9e18831d8a6ae219bcf138/L0KzQYm3UsA1N5p7fZH0aYP2gLBuTcIxOWUyfttvYT36f8PzhL1kfaEySqI6MD3pebfoTgdwep1pRdVAcD3pebfoTgdwep1pRdVAdHWwhMP2kPh6NZRxgeJqcoT2PYboV8Y6PGg2fqVsNUizPoi5U8EzPGM6Sac6N0e1QIeBWck6QGYziNDw/kisspng-2014-fifa-world-cup-2010-fifa-world-cup-fifa-world-cute-trophy-cliparts-5a769471f3c580.7231242515177206899985.png' 
          alt='imagem ta taça'/>
          <h1>Campeão</h1>
        </div>
   </div>
 );
}