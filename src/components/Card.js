import React from "react";
import '../styles/Card.css'

export default function Card(props) {
    return (
        <div onClick={()=> {props.fun(props.card['value'])}}>
            <div className="flip-card" style={props.card['selected']? {transform: 'rotateY(180deg)'}: {}}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <h1>{props.card['value']}</h1>
                    </div>
                    <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}