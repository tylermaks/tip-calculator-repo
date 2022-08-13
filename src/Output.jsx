import React from "react"

import "./Assets/Styles/Output/Output.css"

function Output() {

    const tipOutput = ["Tip Amount", "Total"]

    return(
        <div className="output-section">
            <div>
                {
                    tipOutput.map(item => {
                        return(
                            <div className="tip-output">
                                <div>
                                    <span className="amount">{item}</span>
                                    <span className="per-person">/  person</span>
                                </div>
                                <div>
                                    <h2>$0.00</h2>
                                </div>
                            </div>
                        )
                    })
                } 
            </div>
            <button className="reset-btn">Reset</button>
        </div>
    )
}

export default Output;