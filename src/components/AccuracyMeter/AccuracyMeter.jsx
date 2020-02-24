import React from 'react';
import { ScoringBtn } from '../components';

function AccuracyMeter() {
  return (
    <div className="AccuracyMeter">
      {/* TODO create ScoringBtn with score=2 when accuracy meter is implemented */}
      <ScoringBtn
        key={1}
        score={1}
      />
      <ScoringBtn
        key={3}
        score={3}
      />
    </div>
  )
}

export default AccuracyMeter;
