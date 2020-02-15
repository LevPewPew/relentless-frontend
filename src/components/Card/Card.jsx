import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// TODO test, remove
import { codeCsharp, codeJavascript} from '../../demo/code';

function Card(props) {
  const { question, answer } = props;

  return (
    <article className="Card">
      {/* <SyntaxHighlighter language="csharp" style={vs2015}>
        {codeCsharp}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {codeJavascript}
      </SyntaxHighlighter> */}
      
      <p>{question}</p>
      <p>{answer}</p>
    </article>
  );
}

export default Card;
