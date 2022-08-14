import React, {useState} from "react"
import Input from "./Input"
import Output from "./Output"

import './Assets/Styles/Calculator/Calculator.css'

function Calculator(){

    const [billAmount, setBillAmount] = useState(0)

    const handleChange = (e) =>{
        setBillAmount(e.target.value)
    }

    return(
        <section className="calc-container">
            <Input 
                onFocusOut={handleChange}
                billAmount={billAmount}
            />
            <Output />
        </section>
    )
}

export default Calculator;