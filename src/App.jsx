import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I Rendered {renderCount.current} Times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
