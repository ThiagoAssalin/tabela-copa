import React from 'react';
import {Link} from 'react-router-dom'

import './header.css'

export default function Header() {
 return (
   <div className='container'>
        <h1>Tabela da Copa</h1>
        <div>
            <Link to='/' className='links'>FASE DE GRUPOS</Link>
            <Link to='playoffs' className='links'>MATA MATA</Link>      
        </div>
   </div>
 );
}