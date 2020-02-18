import React, { useState } from 'react';
import { HighlightedMarkdown } from '../components';

function Card(props) {
  const { question, answer } = props;
  const [ isFrontSide, setIsFrontSide ] = useState(true);

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
