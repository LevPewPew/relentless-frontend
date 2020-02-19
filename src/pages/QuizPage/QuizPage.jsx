import React from 'react';
import { useSelector } from 'react-redux';
import { AccuracyMeter, Card, CardForm, DeckList } from '../../components/components';

function QuizPage() {
  const deckPosition = useSelector((state) => state.cardsReducer.deckPosition);

  return (
    <main className="QuizPage">
      {/* <DeckList /> */}
      <Card
        deckPosition={deckPosition}
      />
      <CardForm />
      <AccuracyMeter />
    </main>
  )
}

export default QuizPage;
