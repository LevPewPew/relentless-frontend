import React, { useEffect, useState } from 'react';
import { setCurrentDeck, setCurrentDeckIndex } from '../../store/actions/flashCardsActions';
import { turnOnCardsDisplay } from '../../store/actions/uiDisplayActions';
import { useSelector } from 'react-redux';

function DeckSummaryPreview(props) {
  const currentDeckIndex = useSelector((state) => state.flashCardsReducer.currentDeckIndex);
  const { index, title, description } = props;
  const [ isSelected, setIsSelected ] = useState(false);

  const handleComponentClick = () => {
    setCurrentDeck(index);
    setCurrentDeckIndex(index);
    turnOnCardsDisplay();
  }

  useEffect(() => {
    if (index === currentDeckIndex) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [currentDeckIndex]);

  return (
    <article className={`DeckSummaryPreview ${isSelected ? 'selected' : null }`} onClick={handleComponentClick} >
      <div>{title}</div>
      <div>{description}</div>
    </article>
  );
}

export default DeckSummaryPreview;
