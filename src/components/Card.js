import React from "react";


export default function Card(props) {
    return (
        <div onClick={()=> props.fun(props.value)}>
            <h1>{props.value}</h1>
        </div>
    )
}