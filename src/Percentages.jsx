import React from "react"

import "./Assets/Styles/Percentage/Percentage.css"

function Percentages(props) {

    const percentages = [5, 10, 15, 25, 50]

    return(
        <div className="percentage-container">
             <span>Select Tip %</span>
             <div  className="percentage-grid">
                {
                    percentages.map(item => {

                        const active = props.percentage === item ? "percentage percentage--active" : "percentage"

                        return(
                            <div id={item} onClick={props.getPercentage} className={active}>
                                {item}%
                            </div>
                        )
                    })
                }
                
                <input id={props.percentage} onClick={props.getPercentage} onChange={props.getCustom} className="percentage percentage--input" type="text" name="percentage--input" placeholder="Custom"/>
             </div>

        </div>
    )
}

export default Percentages;