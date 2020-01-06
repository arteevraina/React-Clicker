import React,{useState} from "react"
import "./Clicker.css"

const Clicker = () => {
    //Declare a new state variable which we call count

    const[count,setCount] = useState(0)

    function handleInc() {
        setCount((count) => count + 1)
    }

    function handleRes() {
        setCount((count) => count = 0)
    }

    function handleDec() {
        setCount((count) => count- 1)
    }

        return(
        <div className="clicker">        
            <div className="display">
                <b>{count}</b>
            </div>
            <div className="btn">
                <button onClick={handleInc} className="btn-btn1"><b>+</b></button>
                <button onClick={handleRes} className="btn-btn2"><b>RESET</b></button>
                <button onClick={handleDec} className="btn-btn3"><b>-</b></button>
            </div>
        </div>
        )
}

export default Clicker