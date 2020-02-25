import React from 'react';

function SubmitBtn(props) {
  const { text } = props;
  return (
    <button className="SubmitBtn btn" type="submit">{text}</button>
  );
}

export default SubmitBtn;
