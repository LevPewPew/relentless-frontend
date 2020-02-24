import React from 'react';
import { cycleCard } from '../../../store/actions/cardsActions';

function AccuracyBtn() {
  const handleClick = () => {
    cycleCard();
  }

  return (
    <button className="AccuracyBtn btn" onClick={handleClick}>AccuracyBtn PLACEHOLDER</button>
  )
}

export default AccuracyBtn;
