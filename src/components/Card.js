import React from "react";
import '../styles/Card.css'
import "../fonts/Kidsco.otf";

export default function Card(props) {

    function getFlipped() {
        return props.card['selected']? "flip" : ""
    }

    return (
        <div onClick={()=> {props.selected.length <2 ? props.fun(props.card) : null}}>
            
            <div className={"flip-card" }>
                <div className={"flip-card-inner " + getFlipped()} >
                    <div className="flip-card-front">
                        <h1>?</h1>
                    </div>
                    <div className={"flip-card-back " + getFlipped()}>
                    <h1>{props.card['value']}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}