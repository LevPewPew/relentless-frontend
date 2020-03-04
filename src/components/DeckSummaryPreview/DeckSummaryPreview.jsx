import React, { useEffect, useState } from 'react';
import { setCurrentDeck, setCurrentDeckIndex } from '../../store/actions/flashCardsActions';
import { turnOnCardsDisplay, turnOnDeckEditor } from '../../store/actions/uiDisplayActions';
import { useSelector } from 'react-redux';

function DeckSummaryPreview(props) {
  const currentDeckIndex = useSelector((state) => state.flashCardsReducer.currentDeckIndex);
  const decksData = useSelector((state) => state.flashCardsReducer.decksData);
  const { index, title, description } = props;
  const [ isSelected, setIsSelected ] = useState(false);

  const defaultValues = decksData[index];

  const handleComponentClick = () => {
    setCurrentDeck(index);
    setCurrentDeckIndex(index);
    turnOnCardsDisplay();
    turnOnDeckEditor(defaultValues);
    console.log(defaultValues);
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
