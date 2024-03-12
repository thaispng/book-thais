import {Titule} from '../Titule';

function Card ({title, ano, name}){
    return (
        <div>
        <Titule>{title}</Titule>
        <h4>{name}</h4>
        <p>{ano}</p>
        <button>Saiba mais</button>
      </div>
    )
}

export default Card;