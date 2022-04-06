import { useState } from "react";
import Card from '../card'
import "./style.css";

const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    if (e.target.id === suitFilter) {
      setSuitFilter(true);
      e.target.checked = false;
    } else {
      setSuitFilter(e.target.id)
    }
  };


  return (
  <>
    <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label forhtml="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label forhtml="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label forhtml="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label forhtml="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div>

        {!suitFilter &&
          cardsList.map((actual, index) => {
            return <Card card={actual} key={index} />;
          })}

        {suitFilter &&
          cardsList
            .filter((actual) => actual.suit === suitFilter)
            .map((actual, index) => {
              return <Card card={actual} key={index} />;
            })}
    </div>
  </>
    
  );
};

export default CardsList