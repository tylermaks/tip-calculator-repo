import React from "react"
import Input from "./Input"
import Output from "./Output"

import './Assets/Styles/Calculator/Calculator.css'

function Calculator(){
    return(
        <section className="calc-container">
            <Input />
            <Output />
        </section>
    )
}

export default Calculator;