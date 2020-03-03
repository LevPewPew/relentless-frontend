import React from 'react';
import {
  CardForm,
  CardList,
  DeckForm,
  DeckList
} from 'components';

// TODO delete this component if ends up being vestigial
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
