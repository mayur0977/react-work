import React from 'react';
import './App.css';
import Counter from './components/Counter';
import InputTestMobileView from './components/InputTest/Platforms/Mobile/InputTestMobileView';
import { InputTestWebView } from './components/InputTest/Platforms/Web/InputTestWebView';
import { TextField } from './components/TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("value in another component", e.target.value);

      }} text="hellow" person={{ firstName: 'mayur', lastName: 'patel' }} />
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(count - 1)}> - </button>
          </div>
        )

        }
      </Counter>

      <InputTestWebView />
      <InputTestMobileView />
    </div>
  );
}


export default App;
