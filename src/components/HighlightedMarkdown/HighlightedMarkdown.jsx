import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Marked from 'marked';
import { Markup } from 'interweave';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// TODO test, remove
import { codeCsharp, codeJavascript} from '../../demo/code';
import { sampleMarkdown } from '../../demo/markdown';

function HighlightedMarkdown(props) {
  const { markdown } = props;

  const splitUpTextAndCode = (text) => {
    let parsedText = text.split('```');
    parsedText = parsedText.map((segment, index) => {
      let isCode = index % 2 === 1 ? true : false;
      return { text: segment.trim(), code: isCode };
    });

    return parsedText;
  }

  return (
    splitUpTextAndCode(markdown).map((segment) => {
      let markdown = Marked(segment.text);

      if (segment.code) {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={vs2015}
          >
            {codeJavascript}
          </SyntaxHighlighter>
        )
      } else {
        return (
          <Markup
            content={markdown}
          />
        )
      }
    })
  );
}

export default HighlightedMarkdown;
