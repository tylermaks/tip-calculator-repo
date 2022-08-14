import React, {useState} from "react"

import Percentages from "./Percentages"

function Input(props){

    const [isEmpty, setIsEmpty] = useState(0)
    const checkEmpty = (e) =>{ 
        setIsEmpty(e.target.value)
    }

    const checkError =  (props.billAmount > 0 && isEmpty <= 0) ? "Cannot be blank" : null
   
    return(
        <div className="input-section">
            <div className="input-container">
                <div>
                    <label htmlFor="bill">Bill</label>
                    <input 
                        id="bill" 
                        type="number" 
                        name="bill"
                        pattern="^[0-9]*$"
                        placeholder="0"
                        onBlur={props.onBlur}
                    />
                </div>
                
                <Percentages 
                    onClick={props.onClick}
                    percentage={props.percentage}
                />

                <div>
                    <label htmlFor="people">Number of People</label>
                    <span className="error">{checkError}</span>
                    <input 
                        id="people"
                        type="number" 
                        name="people"  
                        pattern="^[0-9]*$"
                        placeholder="0"
                        onBlur={checkEmpty}
                    />
                </div>
            </div>
        </div>
    )
}

export default Input