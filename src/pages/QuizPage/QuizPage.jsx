import React from 'react';
import { AccuracyMeter, CardForm, DeckList } from '../../components/components';

function QuizPage() {
  return (
    <main className="QuizPage">
      <DeckList />
      <CardForm />
      <AccuracyMeter />
    </main>
  )
}

export default QuizPage;
