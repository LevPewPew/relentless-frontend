import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);

      return res;
    }
    
    let res = getData();
    setData(res.data);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>All Categories</h2>
      <div>
        {
          data ?
          data.map((category, index) => {
            return (
              <div key={index}>{category.title}</div>
            )
          }) :
          <div>empty, no categories</div>
        }
      </div>
    </div>
  );
}

export default App;
