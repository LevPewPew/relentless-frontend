import React, { useEffect } from 'react';
import Prism from 'prismjs';

function Card(props) {
  const { question, answer } = props;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article className="Card">
      <pre>
        <code className="language-javascript">
        {`
          onSubmit(e) {
            e.preventDefault();
            const job = {
              title: 'Developer',
              company: 'Facebook' 
            };
          }
        `}
        </code>
      </pre>
      <p>{question}</p>
      <p>{answer}</p>
    </article>
  );
}

export default Card;
