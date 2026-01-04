import '../styles/dropdown.css'


const Dropdown = (props)=>{
    const {getDowndown, setDropdown} = props
    const closeDropdown = ()=>{
        if(getDowndown == true){
            setDropdown(false);
        }
    }
    return (
        <>
            <div id="box">
                <p>Who is this?</p>
                <button onClick={closeDropdown}>1</button>
                <button onClick={closeDropdown}>2</button>
                <button onClick={closeDropdown}>3</button>

            </div>
        </>
    )
}

export default Dropdown