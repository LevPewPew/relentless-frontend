import React from 'react';
import { useSelector } from 'react-redux';
import {
  CardForm,
  CardList,
  DeckForm,
  DeckList
} from 'components';

function DeckExplorerPage() {
  const isCardsDisplayActive = useSelector((state) => state.uiDisplayReducer.isCardsDisplayActive);
  const isDeckCreatorActive = useSelector((state) => state.uiDisplayReducer.isDeckCreatorActive);
  const isDeckEditorActive = useSelector((state) => state.uiDisplayReducer.isDeckEditorActive);
  
  return (
    <main className="DeckExplorerPage">
      <DeckList />
      {
        isCardsDisplayActive ?
        <CardList /> :
        null
      }
      {
        isDeckCreatorActive ?
        <DeckForm post/> :
        null
      }
      {
        isDeckEditorActive ?
        <DeckForm put/> :
        null
      }
      {/* <CardForm /> */}
    </main>
  )
}

export default DeckExplorerPage;
