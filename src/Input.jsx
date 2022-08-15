import React from "react"
import Percentages from "./Percentages"

import "./Assets/Styles/Input/Input.css"

function Input(props){

    const checkError =  (props.billAmount > 0 && props.people <= 0) ? "Cannot be blank" : null
   
    return(
        <div className="input-section">
            <form id="tipsCalc" className="input-container">
                <div>
                    <label htmlFor="bill">Bill</label>
                    <input 
                        id="bill" 
                        type="number" 
                        name="bill"
                        placeholder="0"
                        step=".01"
                        min="1"
                        onBlur={props.onBlur}
                    />
                </div>
                
                <Percentages 
                    getPercentage={props.getPercentage}
                    percentage={props.percentage}
                    getCustom={props.getCustom}
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
                        onBlur={props.getPeople}
                    />
                </div>
            </form>
        </div>
    )
}

export default Input