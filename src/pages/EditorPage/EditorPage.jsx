import React from 'react';
import {
  CardForm,
  CardList,
  DeckForm,
  DeckList
} from '../../components/components';

function EditorPage() {
  return (
    <main className="EditorPage">
      {/* <CardList /> */}
      <DeckList />
      <DeckForm />
      {/* <CardForm /> */}
    </main>
  )
}

export default EditorPage;
