import React from 'react';
import './App.css';
import {StateType} from './redux/store';

interface IProps {
  state: StateType
}

const App: React.FC<IProps> = (props:IProps) => {
  let phrasesElem = props.state.lessons.lessons[0].phrases.map((l)=><p>{l.text}</p>)
  return (
    <div className="App">
        <p>
          {props.state.lessons.lessons[0].task}
        </p>
        {phrasesElem}
    </div>
  );
}

export default App;
