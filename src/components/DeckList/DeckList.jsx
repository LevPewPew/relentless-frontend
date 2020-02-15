import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components';

function DeckList() {
  const deck = useSelector((state) => state.cardsReducer.cardsData)

  return (
    <section className="DeckList">
      {
        deck ?
        deck.map((card, index) => {
          const { question, answer } = card;
          return (
            <Card
              key={index}
              question={question}
              answer={answer}
            />
          )
        }) :
        <div>Empty deck! Click on Add Cards to put cards in this deck.</div>
      }
    </section>
  );
}

export default DeckList;
