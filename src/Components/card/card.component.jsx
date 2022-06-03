import { Component } from "react";

import './card.styles.css';

class Card extends Component {
    render(){
        const {id, name, email} = this.props.monster;//for optimasation of code we can to remove monster.id for example and write id.

        return (
        <div className="card-container" key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
    } 
}

export default Card