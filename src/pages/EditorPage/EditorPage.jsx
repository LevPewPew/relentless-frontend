import React from 'react';
import { CardForm, CardList, DeckForm } from '../../components/components';

function EditorPage() {
  return (
    <main className="EditorPage">
      <CardList />
      <DeckForm />
      <CardForm />
    </main>
  )
}

export default EditorPage;
