import React, {useState} from "react"
import Input from "./Input"
import Output from "./Output"

import './Assets/Styles/Calculator/Calculator.css'

function Calculator(){

    const [billAmount, setBillAmount] = useState(0)
    const [percentage, setPercentage] = useState("15")

    const handleChange = (e) =>{
        setBillAmount(e.target.value)
    }

    const handleClick = (e) => {
        setPercentage(e.target.id)
    }

    return(
        <section className="calc-container">
            <Input 
                onBlur={handleChange}
                billAmount={billAmount}
                onClick={handleClick}
                percentage={percentage}
            />
            <Output />
        </section>
    )
}

export default Calculator;