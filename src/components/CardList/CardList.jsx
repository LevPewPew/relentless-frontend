import React from 'react';
import { useSelector } from 'react-redux';
import { CardSummaryPreview } from '../components';

function CardList() {
  const cards = useSelector((state) => state.flashCardsReducer.currentDeck.cards);

  return (
    <section className="CardList">
      {
        cards ?
        cards.map((card, index) => {
          return (
            <CardSummaryPreview
              key={index}
              question={card.question}
              answer={card.answer}
            />
          )
        }) :
        <div>Empty deck! Click on Add Cards to put cards in this deck.</div>
      }
    </section>
  );
}

export default CardList;
