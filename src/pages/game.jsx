import {useState} from 'react'
import map from '../assets/maps/wheres-waldo-beach.jpeg'
import Dropdown from '../shared/dropdown'

import '../styles/game.css'
const Game = ()=>{
    const [getState, setState] = useState(false);

    document.addEventListener("click", (e)=>{
        if(e.target){
            console.log(`X: ${e.x}, Y: ${e.y}`);
            setState(true);
        }
    })
    return (
        <>
            <img className='map' src={map} alt="" />
            {getState && <Dropdown/>}
        </>
    )
}


export default Game