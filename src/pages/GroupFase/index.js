import React from 'react';
import Tabela from '../../components/Tabela';

export default function GroupFase() {
  var grupoA = ['QATAR','ECUADOR','SENEGAL','NOVA ZELÂNDIA']
  var grupoB = ['INGLATERRA','IRAN','USA','GALES']
  var grupoC = ['ARGENTINA','ARÁBIA SAUDITA','MÉXICO','POLÓNIA']
  var grupoD = ['FRANÇA','AUSTRALIA','DINAMARCA','TUNISIA']
  var grupoE = ['ESPANHA','COSTA RICA','ALEMANHA','JAPÃO']
  var grupoF = ['BELIGICA','CANADA','MARROCOS','CROACIA']
  var grupoG = ['BRASIL','SERVIA','SUÉCIA','CAMARÕES']
  var grupoH = ['PORTUGAL','GHANA','URUGUAI','KOREA DO SUL']

 return (
   <div>
      <Tabela grupo={grupoA}/>
      <Tabela grupo={grupoB}/>
      <Tabela grupo={grupoC}/>
      <Tabela grupo={grupoD}/>
      <Tabela grupo={grupoE}/>
      <Tabela grupo={grupoF}/>
      <Tabela grupo={grupoG}/>
      <Tabela grupo={grupoH}/>
   </div>
 );
}