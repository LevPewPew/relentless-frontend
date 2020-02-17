import React from 'react';
import { HighlightedMarkdown } from '../components';

function Card(props) {
  const { question, answer } = props;

  return (
    <article style={{ border: "3px dashed black", margin: "20px" }} className="Card">
      <HighlightedMarkdown 
        markdown={question}
      />
      <HighlightedMarkdown 
        markdown={answer}
      />
    </article>
  );
}

export default Card;
