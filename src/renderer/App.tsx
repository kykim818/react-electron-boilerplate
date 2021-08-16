import React, { useRef, useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Hello = () => {
  const inputOne = useRef<HTMLInputElement>(null);
  const inputTwo = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState(0);

  const addInteger = () => {
    if (inputOne.current?.value && inputTwo.current?.value) {
      setResult(
        Number.parseFloat(inputOne.current.value) +
          Number.parseFloat(inputTwo.current.value)
      );
    } else {
      console.log('빈 값이 있습니다.');
      inputOne.current?.focus();
    }
  };
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <p>첫번째 수</p>
          <input ref={inputOne} type="number" />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>두번째 수</p>
          <input ref={inputTwo} type="number" />
        </div>
        <button
          type="button"
          onClick={addInteger}
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginLeft: '20px',
            marginTop: 'auto',
            marginBottom: '0',
          }}
        >
          계산
        </button>
      </div>
      <p>결과</p>
      <p>{result}</p>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
