import React from 'react';
import { useSelector } from 'react-redux';
import {
  CardForm,
  CardList,
  DeckForm,
  DeckList
} from '../../components/components';

function DeckExplorerPage() {
  const isCardsDisplayActive = useSelector((state) => state.uiDisplayReducer.isCardsDisplayActive);
  
  return (
    <main className="DeckExplorerPage">
      <DeckList />
      {
        isCardsDisplayActive ?
        <CardList /> :
        null
      }
      <DeckForm />
      {/* <CardForm /> */}
    </main>
  )
}

export default DeckExplorerPage;
