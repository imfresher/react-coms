import React, { useState } from 'react';
import Cell from './Cell';

function Table() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <table>
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Cell value="cell-1" />
              <Cell value="cell-2" />
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Table;
