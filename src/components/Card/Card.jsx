import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Marked from 'marked';
import { Markup } from 'interweave';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// TODO test, remove
import { codeCsharp, codeJavascript} from '../../demo/code';
import { sampleMarkdown } from '../../demo/markdown';
const html = Marked(sampleMarkdown);

function Card(props) {
  const { question, answer } = props;

  console.log(question);
  // if (question.includes('```')) {
    // let newQuestion0 = question.split('```')[0];
    // let newQuestion1 = question.split('```')[1].trim();
    // let newQuestion2 = question.split('```')[2];
  // }

  return (
    <article style={{ border: "3px dashed black", margin: "20px" }} className="Card">
      {/* <SyntaxHighlighter language="csharp" style={vs2015}>
        {codeCsharp}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {codeJavascript}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {newQuestion1}
      </SyntaxHighlighter> */}
      {/* <Markup content={html} /> */}
      <p>{question}</p>
      {/* <p style={{ border: "3px dashed red"}}>{newQuestion0}</p>
      <div style={{ border: "3px dashed green"}}>
        <SyntaxHighlighter language="javascript" style={vs2015}>
          {codeJavascript}
          {newQuestion1}
        </SyntaxHighlighter>
      </div>
      <p style={{ border: "3px dashed blue"}}>{newQuestion2}</p> */}
      <p>{answer}</p>
    </article>
  );
}

export default Card;
