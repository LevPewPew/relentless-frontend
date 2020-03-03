import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HighlightedMarkdown } from 'components';

function Card(props) {
  const { deckPosition } = props;
  const deck = useSelector((state) => state.flashCardsReducer.cardsData);
  const [ isFrontSide, setIsFrontSide ] = useState(true);

  let { question, answer } = deck[deckPosition];
  let sideDisplayed = isFrontSide ? "front-displayed" : "back-displayed" ;

  const toggleSideDisplayed = () => {
    if (isFrontSide) {
      setIsFrontSide(false);
    } else {
      setIsFrontSide(true);
    }
  }

  return (
    <article className={`Card ${sideDisplayed}`} onClick={toggleSideDisplayed}>
      {
        isFrontSide ?
        <HighlightedMarkdown className="front-side"
          markdown={question}
        /> :
        <HighlightedMarkdown className="back-side"
          markdown={answer}
        />
      }
    </article>
  );
}

export default Card;
