import React from 'react';
import './Card.scss';

function Card(props) {
  const { question, answer } = props;

  return (
    <article className="Card">
      <p>{question}</p>
      <p>{answer}</p>
    </article>
  );
}

export default Card;
