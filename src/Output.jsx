import React from "react"

import "./Assets/Styles/Output/Output.css"
import {getTip, getTotal} from "./OutputData"

function Output({billAmount, people, percentage, ...props}) {

    const tipOutput = ["Tip Amount", "Total"]
    const Tip = getTip(billAmount, people, percentage);
    const Total = getTotal(billAmount, people, percentage);

    return(
        <div className="output-section">
            <div>
                {
                    tipOutput.map(item => {

                        const mapAmount = item === "Tip Amount" ? Tip : Total;

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
            <button form="tipsCalc" type="reset" onClick={props.resetAll} className="reset-btn">Reset</button>
        </div>
    )
}

export default Output;