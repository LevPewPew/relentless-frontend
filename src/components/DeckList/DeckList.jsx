import React from 'react';
import './DeckList.scss';
import { useSelector } from 'react-redux';
// import

function DeckList() {
  const deck = useSelector((state) => state.cardsReducer.cardsData)

  return (
    <div className="DeckList">
    {
      deck ?
      deck.map((card, index) => {
        return (
          <div key={index}>{card.question} {card.answer}</div>
        )
      }) :
      <div>deck is empty, no cards</div>
    }
  </div>
  );
}

export default DeckList;
