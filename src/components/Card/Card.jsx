import React from 'react';
import './Card.scss';

function Card(props) {
  const { index, question, answer } = props;

  return (
    <article className="Card">
      <p key={index}>{question}</p>
      <p key={index}>{answer}</p>
    </article>
  );
}

export default Card;
