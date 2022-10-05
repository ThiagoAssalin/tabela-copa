import React, {useEffect, useState} from 'react';

import './linhaTabela.css'

export default function LinhaTabela(props) {

    const [pj, setPj] = useState(0)
    const [v, setV] = useState(0)
    const [e, setE] = useState(0)
    const [d, setD] = useState(0)
    const [gp, setGp] = useState(0)
    const [gc, setGc] = useState(0)
    const [sg, setSg] = useState(0)
    const [pts, setPts] = useState(0)

    useEffect(()=>{
        setSg(gp-gc)
    },[gp,gc])

    useEffect(()=>{
        setPts(parseInt(v*3)+parseInt(e))
    },[v,e])
    function handlerPj(e){
        if(e.target.value<0){
            return
        }
        setPj(e.target.value)
    }
    function handlerV(e){
        if(e.target.value<0){
            return
        }
        setV(e.target.value)
    }
    function handlerE(e){
        if(e.target.value<0){
            return
        }
        setE(e.target.value)
    }
    function handlerD(e){
        if(e.target.value<0){
            return
        }
        setD(e.target.value)
    }
    function handlerGp(e){
        if(e.target.value<0){
            return
        }
        setGp(e.target.value)
    }
    function handlerGc(e){
        if(e.target.value<0){
            return
        }
        setGc(e.target.value)
        
    }
    

 return (
   
    <tr>
        <th>{props.grupo}</th>              
        <th><input type='number' value={pj} onChange={handlerPj}/></th>
        <th><input type='number' value={v} onChange={handlerV}/></th>              
        <th><input type='number' value={e} onChange={handlerE}/></th>              
        <th><input type='number' value={d} onChange={handlerD}/></th>
        <th><input type='number' value={gp} onChange={handlerGp}/></th>              
        <th><input type='number' value={gc} onChange={handlerGc}/></th>
        <th><input type='text' value={sg}/></th>              
        <th><input type='text' value={pts}/></th>
    </tr>
   
 );
}