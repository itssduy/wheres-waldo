import {useState, useEffect} from 'react'
import map from '../assets/maps/wheres-waldo-beach.jpeg'
import Dropdown from '../shared/dropdown'

import '../styles/game.css'
const Game = ()=>{
    const [getDowndown, setDropdown] = useState(false);
    const [getOffset, setOffset] = useState({});


    //Normalize the y offset compared to an x 
    const normalizeOffset = (x, y)=>{
        const xRect = x.getBoundingClientRect();
        const yRect = y.getBoundingClientRect();

        const normalizedX = Math.round((yRect.left/xRect.width) * 100);
        const normalizedY = Math.round((yRect.top/xRect.height) * 100);
        console.log(`X: ${normalizedX}, Y: ${normalizedY} `);
        return {
            x: normalizedX.toString(),
            y: normalizedY.toString(),
        }

    }

    const findPerson = async(name)=> {
        const offset = getOffset;

        if(offset){
            //WALDO  = X: .61, Y: .37
            const url = 'http://localhost:3000/1';
            const headers = {"Content-Type": "Application/json"};
            const body = {name: name, x: offset.x, y: offset.y}

            const result = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            })
            const data = await result.json()
            if(data.found == true){
                //console.log('found')
            }
        }
        
    }

    useEffect(()=>{
        const clickHandler = async (event)=>{
            if(event.target && event.target.id==="map"){
                const dropdown = document.getElementById("box");
                if(dropdown){
                    
                    dropdown.style.position="absolute";
                    dropdown.style.left = `${event.clientX}px`;
                    dropdown.style.top = `${event.clientY}px`;

                    const offset = normalizeOffset(event.target, dropdown);
                    setOffset(offset)

                } else {
                    setDropdown(true);

                }
            }
        }
        document.addEventListener("click", clickHandler);

    }, [])
    
    return (
        <>
            <img id='map' src={map} alt="" />
            {getDowndown && <Dropdown getDowndown={getDowndown} setDropdown={setDropdown} findPerson={findPerson}/>}
        </>
    )
}


export default Game