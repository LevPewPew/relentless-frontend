import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components';

function CardList() {
  const deck = useSelector((state) => state.cardsReducer.cardsData);

  return (
    <section className="CardList">
      {
        deck ?
        deck.map((_, index) => {
          return (
            <Card
              key={index}
              deckPosition={index}
            />
          )
        }) :
        <div>Empty deck! Click on Add Cards to put cards in this deck.</div>
      }
    </section>
  );
}

export default CardList;
