import React from "react"
import "./Clicker.css"

class Clicker extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
        this.handleInc = this.handleInc.bind(this)
        this.handleRes = this.handleRes.bind(this)
        this.handleDec = this.handleDec.bind(this)
    }

    handleInc() {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }

    handleRes() {
        this.setState({
            count : 0
        })
    }

    handleDec() {
        this.setState((prevState) => {
            return{
                count : prevState.count -1
            }
        })
    }


    render() {
        return(
        <div className="clicker">        
            <div className="display">
                <b>{this.state.count}</b>
            </div>
            <div className="btn">
                <button onClick={this.handleInc} className="btn-btn1"><b>+</b></button>
                <button onClick={this.handleRes} className="btn-btn2"><b>RESET</b></button>
                <button onClick={this.handleDec} className="btn-btn3"><b>-</b></button>
            </div>
        </div>
        )
    }
}

export default Clicker