import React from "react"

import Percentages from "./Percentages"

function Input(props){

    const checkError =  props.billAmount > 0 ? "Must be a number" : null

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
                        onFocusOut={props.onFocusOut}
                    />
                </div>
                
                <Percentages />

                <div>
                    <label htmlFor="people">Number of People</label>
                    <span className="error">{checkError}</span>
                    <input 
                        id="people"
                        type="number" 
                        name="people"  
                        pattern="^[0-9]*$"
                        placeholder="0"
                    />
                </div>
            </div>
        </div>
    )
}

export default Input