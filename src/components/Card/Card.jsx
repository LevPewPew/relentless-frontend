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

  const splitUpTextAndCode = (text) => {
    let parsedText = text.split('```');
    parsedText = parsedText.map((segment, index) => {
      let isCode = index % 2 === 1 ? true : false;
      return { text: segment.trim(), code: isCode };
    })

    return parsedText;
  }

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
      {/* <p>{question}</p> */}
      {
        splitUpTextAndCode(question).map((segment) => {
          if (segment.code) {
            return (
              <SyntaxHighlighter language="javascript" style={vs2015}>
                {codeJavascript}
              </SyntaxHighlighter>
            )
          } else {
            return <p style={{ border: "3px dashed red" }}>{segment.text}</p>;
          }
        })
      }
      {
        splitUpTextAndCode(answer).map((segment) => {
          if (segment.code) {
            return (
              <SyntaxHighlighter language="javascript" style={vs2015}>
                {codeJavascript}
              </SyntaxHighlighter>
            )
          } else {
            return <p style={{ border: "3px dashed red" }}>{segment.text}</p>;
          }
        })
      }
    </article>
  );
}

export default Card;
