import React from "react"

import Percentages from "./Percentages"

function Input(){
    return(
        <section className="input-section">
            <div className="input-container">
                <label htmlFor="bill">Bill</label>
                <input id="bill" type="text" />
                <Percentages />
                <label htmlFor="people">Number of People</label>
                <input type="text" name="people"  />
            </div>
        </section>
    )
}

export default Input