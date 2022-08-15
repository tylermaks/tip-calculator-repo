import React from "react"

import "./Assets/Styles/Output/Output.css"

function Output(props) {

    const tipOutput = ["Tip Amount", "Total"]

    const getTip = (props.billAmount && props.people) > 0 ? (props.billAmount * (props.percentage/100)/props.people).toFixed(2) : "0.00"
    const getTotal = (props.billAmount && props.people) > 0 ? ((props.billAmount * (1 + props.percentage/100))/props.people).toFixed(2) : "0.00"


    return(
        <div className="output-section">
            <div>
                {
                    tipOutput.map(item => {

                        const mapAmount = item === "Tip Amount" ? getTip : getTotal;

                        return(
                            <div className="tip-output">
                                <div>
                                    <span className="amount">{item}</span>
                                    <span className="per-person">/  person</span>
                                </div>
                                <div>
                                    <h2>$ {mapAmount}</h2>
                                </div>
                            </div>
                        )
                    })
                } 
            </div>
            <button form="tipsCalc" type="reset" onClick={props.onClick} className="reset-btn">Reset</button>
        </div>
    )
}

export default Output;