import React from "react"
import "./card.style.css"

interface IProps {
    monster: {name: String, id: String, email: string}
}

export const Card = (props: IProps) =>(
    <div className="card-container">
        <img className="monster-pic"alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=256x256`} />
        <h1> {props.monster.name} </h1>
        <h1> {props.monster.email} </h1>
    </div>
)