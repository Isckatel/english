import React from 'react';
import './App.css';
import {StateType} from './redux/store';
import LessListContain from './components/LessList/LessListContainer';

interface IProps {
  state: StateType
}

const App: React.FC<IProps> = (props:IProps) => {
  let phrasesElem = props.state.lessons.lessons[0].phrases.map((l)=><p>{l.text}</p>)
  return (
    <div className="App">
      <main className ='main'>
        <div className ='left-block'>
          <LessListContain />
        </div>
        <div className ='center-block'>
          <p>
            {props.state.lessons.lessons[0].task}
          </p>
          {phrasesElem}
        </div>
      </main>
        
    </div>
  );
}

export default App;
