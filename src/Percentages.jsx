import React from "react"

import "./Assets/Styles/Calculator/Calculator.css"

function Percentages(props) {

    const percentages = [5, 10, 15, 25, 50]

    

    return(
        <div className="percentage-container">
             <span>Select Tip %</span>
             <div  className="percentage-grid">
                {
                    percentages.map(item => {

                        const active = props.percentage === String(item) ? "percentage percentage--active" : "percentage"

                        return(
                            <div id={item} onClick={props.onClick} className={active}>
                                {item}%
                            </div>
                        )
                    })
                }
                
                <input className="percentage percentage--input" type="text" name="percentage--input" placeholder="Custom"/>
             </div>

        </div>
    )
}

export default Percentages;