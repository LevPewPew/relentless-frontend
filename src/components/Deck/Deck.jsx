import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// TODO delete this component if ends up being vestigial
function Deck(props) {
  const { title, description } = props;

  return (
    <article className="Deck">
      <div>{title}</div>
      <div>{description}</div>
    </article>
  );
}

export default Deck;
