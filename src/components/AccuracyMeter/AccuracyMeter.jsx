import React from 'react';
import { AccuracyBtn } from 'components';

function AccuracyMeter() {
  return (
    <div className="AccuracyMeter">
      {/* TODO create AccuracyBtn with score=2 when accuracy meter is implemented */}
      <AccuracyBtn
        key={1}
        score={1}
      />
      <AccuracyBtn
        key={3}
        score={3}
      />
    </div>
  )
}

export default AccuracyMeter;
