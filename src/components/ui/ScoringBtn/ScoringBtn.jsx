import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ScoringBtn() {
  const deckPosition = useSelector((state) => state.cardsReducer.deckPosition);
  const dispatch = useDispatch();

  const cycleCard = () => {
    
  }

  return (
    <button className="ScoringBtn btn">ScoringBtn PLACEHOLDER</button>
  )
}

export default ScoringBtn;
