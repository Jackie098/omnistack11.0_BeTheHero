import React, {useState} from 'react';

import Header from './Header';

function App() {  
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);

    console.log(counter);
  }

    return (
      <div>
        <Header>Count: {counter}</Header>
        <button onClick={increment}>Increment</button>
      </div>
    );
}

export default App;
