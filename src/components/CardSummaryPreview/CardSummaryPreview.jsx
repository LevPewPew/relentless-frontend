import React from 'react';

function CardSummaryPreview(props) {
  const { question, answer } = props;
  
  return (
    <article>
      <div>{question}</div>
      <div>{answer}</div>
    </article>
  );
}

export default CardSummaryPreview;
