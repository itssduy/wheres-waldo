import {useState} from 'react'
import map from '../assets/maps/wheres-waldo-beach.jpeg'
import Dropdown from '../shared/dropdown'

import '../styles/game.css'
const Game = ()=>{
    const [getDowndown, setDropdown] = useState(false);

    //Normalize the y offset compared to an x 
    const normalizeOffset = (x, y)=>{
        const xRect = x.getBoundingClientRect();
        const yRect = y.getBoundingClientRect();

        const normalizedX = Math.round((yRect.left/xRect.width) * 1000)/1000;
        const normalizedY = Math.round((yRect.top/xRect.height) * 1000)/1000;
        console.log(`X: ${normalizedX}, Y: ${normalizedY} `);
        return {
            x: normalizedX,
            y: normalizedY,
        }

    }
    document.addEventListener("click", (event)=>{
        if(event.target && event.target.id==="map"){
            const dropdown = document.getElementById("box");
            if(dropdown){
                const offset = normalizeOffset(event.target, dropdown);
                //WALDO  = X: .61, Y: .37
                dropdown.style.position="absolute";
                dropdown.style.left = `${event.clientX}px`;
                dropdown.style.top = `${event.clientY}px`;

            } else {
                setDropdown(true);

            }
        }
    })
    return (
        <>
            <img id='map' src={map} alt="" />
            {getDowndown && <Dropdown getDowndown={getDowndown} setDropdown={setDropdown}/>}
        </>
    )
}


export default Game