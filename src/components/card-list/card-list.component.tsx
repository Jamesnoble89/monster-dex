import React, {ReactNode} from 'react';
import {Card} from "../card/card.component"
import './card-list.styles.css';

interface IProps {
children?: ReactNode
monsters: Array<{name: string, id: string, email: string}>
}


export const CardList = (props: IProps) => (

 <div className='card-list'>{props.monsters.map(monster => (
     <Card key={monster.id} monster={monster}/>
 ))}</div>
)