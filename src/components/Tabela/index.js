import React, {useEffect} from 'react';
import LinhaTabela from '../LinhaTabela';
import './tabela.css'

export default function Tabela(props) {
  function organizaLinha() {
    var grupoOrganizado = props.grupo.sort((a,b)=>a.v - b.v)
    console.log(grupoOrganizado)
  }
 return (
   <div>
        <table>
            <tr>
                <th>Time</th>              
                <th>MP</th>
                <th>V</th>              
                <th>E</th>
                <th>D</th>              
                <th>GP</th>
                <th>GC</th>              
                <th>SG</th>
                <th>Pts</th>
            </tr>
            <LinhaTabela grupo={props.grupo[0]} organizaLinha = {()=>organizaLinha()}/>
            <LinhaTabela grupo={props.grupo[1]} organizaLinha = {()=>organizaLinha()}/>
            <LinhaTabela grupo={props.grupo[2]} organizaLinha = {()=>organizaLinha()}/>
            <LinhaTabela grupo={props.grupo[3]} organizaLinha = {()=>organizaLinha()}/>
        </table>
   </div>
 );
}