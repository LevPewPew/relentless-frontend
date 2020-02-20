import React from 'react';
import { useSelector } from 'react-redux';
import { AccuracyMeter, Card } from '../../components/components';

function QuizPage() {
  const deckPosition = useSelector((state) => state.cardsReducer.deckPosition);

  return (
    <main className="QuizPage">
      <Card
        deckPosition={deckPosition}
      />
      <AccuracyMeter />
    </main>
  )
}

export default QuizPage;
