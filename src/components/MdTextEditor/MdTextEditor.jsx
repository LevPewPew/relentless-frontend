import React from 'react';
import Marked from 'marked';

function MdTextEditor(props) {
  const { name, register } = props;

  const updateMdView = (event) => {
    let mdView = document.querySelector(".md-view");
    let markdown = Marked(event.target.value);
    mdView.innerHTML = markdown;
  }

  return (
    <div className="MdTextEditor">
      <textarea name={name} ref={register} rows="10" cols="50" onChange={updateMdView} />
      <div className="md-view"></div>
    </div>
  );
}

export default MdTextEditor;
