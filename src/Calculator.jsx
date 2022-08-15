import React, {useState} from "react"
import Input from "./Input"
import Output from "./Output"

import './Assets/Styles/Calculator/Calculator.css'

function Calculator(){

    const [billAmount, setBillAmount] = useState(0)
    const [people, setPeople] = useState(0)
    const [percentage, setPercentage] = useState(15)
    
    const getPeople = (e) =>{ 
        setPeople(e.target.value)
    }

    const getBillAmount = (e) =>{
        setBillAmount(e.target.value)
    }

    const getPercentage = (e) => {
        setPercentage(Number(e.target.id))
    }

    const getCustom = (e) => {
        setPercentage(e.target.value)
    }

    const resetAll = () => {
        setBillAmount(0)
        setPeople(0)
        setPercentage(15)
    }

    return(
        <section className="calc-container">
            <Input 
                onBlur={getBillAmount}
                billAmount={billAmount}
                getPercentage={getPercentage}
                percentage={percentage}
                people={people}
                getPeople={getPeople}
                getCustom={getCustom}
            />
            <Output 
                billAmount={billAmount}
                percentage={percentage}
                people={people}
                resetAll={resetAll}
            />
        </section>
    )
}

export default Calculator;