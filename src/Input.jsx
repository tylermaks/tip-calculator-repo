import React from "react"

function Input(){
    return(
        <div className="input-container">
            <label htmlFor="bill">Bill</label>
            <input id="bill" type="text" />
            <div className="percentage-container">

            </div>
        </div>
    )
}

export default Input