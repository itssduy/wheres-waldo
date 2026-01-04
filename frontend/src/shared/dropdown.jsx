import '../styles/dropdown.css'


const Dropdown = (props)=>{
    const {getDowndown, setDropdown, findPerson} = props
    const closeDropdown = (e)=>{
        const name = e.target.innerText.toLowerCase();
        findPerson(name);
        if(getDowndown == true){
            setDropdown(false);
        }
    }
    return (
        <>
            <div id="box">
                <p>Who is this?</p>
                <button onClick={closeDropdown}>Waldo</button>
                <button onClick={closeDropdown}>2</button>
                <button onClick={closeDropdown}>3</button>

            </div>
        </>
    )
}

export default Dropdown