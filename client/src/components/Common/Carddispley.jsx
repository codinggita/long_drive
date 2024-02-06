import ActionAreaCard from './Commoncard.jsx';
import './style.css';
function CardDisplay({headline, cards}) {
    return (
        <div className="garage">
            <h1 className="heading">{headline}</h1>
            <div className="car-cards">
                { cards.map((c, index)=><ActionAreaCard key={index}/>) }
            </div>
        </div>
    );
}

export default CardDisplay;