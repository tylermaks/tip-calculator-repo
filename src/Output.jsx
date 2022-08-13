import React from "react"

import "./Assets/Styles/Output/Output.css"

function Output() {

    const tipOutput = ["Tip Amount", "Total"]

    return(
        <section className="output-section">
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
            <button className="reset-btn">Reset</button>
        </section>
    )
}

export default Output;