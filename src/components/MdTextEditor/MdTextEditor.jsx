import React from 'react';
import Marked from 'marked';
import _ from 'lodash';

function MdTextEditor(props) {
  const { name, register } = props;

  const updateMdView = (event) => {
    let mdView = document.querySelector(`.md-view-${name}`);
    let markdown = Marked(event.target.value);
    mdView.innerHTML = markdown;
  }

  return (
    <div className="MdTextEditor">
      <h2>MARKDOWN EDITOR - {_.upperFirst(name)}</h2>
      <div className="input-output">
        <textarea name={name} ref={register} rows="10" cols="50" onChange={updateMdView} />
        <div className={`md-view-${name}`}></div>
      </div>
    </div>
  );
}

export default MdTextEditor;
