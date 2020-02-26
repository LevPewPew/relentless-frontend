import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components';

function DeckList() {
  const deck = useSelector((state) => state.flashCardsReducer.cardsData);

  return (
    <section className="DeckList">
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

export default DeckList;
