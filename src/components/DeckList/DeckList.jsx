import React from 'react';
import { useSelector } from 'react-redux';
import { DeckSummaryPreview } from 'components';

function DeckList() {
  const deck = useSelector((state) => state.flashCardsReducer.decksData);

  return (
    <section className="DeckList">
      {
        deck ?
        deck.map((deck, index) => {
          return (
            <DeckSummaryPreview
              key={index}
              index={index}
              title={deck.title}
              description={deck.description}
            />
          )
        }) :
        <div>Empty deck! Click on Add Cards to put cards in this deck.</div>
      }
    </section>
  );
}

export default DeckList;
