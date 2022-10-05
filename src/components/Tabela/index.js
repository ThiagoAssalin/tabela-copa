import React from 'react';
import LinhaTabela from '../LinhaTabela';
import './tabela.css'

export default function Tabela(props) {
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
            <LinhaTabela grupo={props.grupo[0]}/>
            <LinhaTabela grupo={props.grupo[1]}/>
            <LinhaTabela grupo={props.grupo[2]}/>
            <LinhaTabela grupo={props.grupo[3]}/>
        </table>
   </div>
 );
}