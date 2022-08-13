import React from "react"

import Percentages from "./Percentages"

function Input(){
    return(
        <div className="input-section">
            <div className="input-container">
                <div>
                    <label htmlFor="bill">Bill</label>
                    <input id="bill" type="text" />
                </div>
                
                <Percentages />

                <div>
                    <label htmlFor="people">Number of People</label>
                    <input type="text" name="people"  />
                </div>
            </div>
        </div>
    )
}

export default Input