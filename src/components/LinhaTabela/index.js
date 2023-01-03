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
        setV(parseInt(e.target.value))
        props.organizaLinha()
        

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
        <th>{props.grupo.nome}</th>              
        <th><input type='number' value={pj} onChange={handlerPj}/></th>
        <th><input type='number' value={props.grupo.v = v} onChange={handlerV}/></th>              
        <th><input type='number' value={props.grupo.e = e} onChange={handlerE}/></th>              
        <th><input type='number' value={props.grupo.d = d} onChange={handlerD}/></th>
        <th><input type='number' value={props.grupo.gp = gp} onChange={handlerGp}/></th>              
        <th><input type='number' value={props.grupo.gc = gc} onChange={handlerGc}/></th>
        <th><input type='text' value={props.grupo.sg = sg}/></th>              
        <th><input type='text' value={props.grupo.pts = pts}/></th>
    </tr>
   
 );
}