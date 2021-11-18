import React from 'react';
import {InitStateType} from '../../redux/lessons-reducer';
type LessonType = {id:number, number:string, name: string};
type  LessonsType =  {
    lessons: Array<LessonType>,
    setCurrentLesson: (id:number) => void
}

const LessList: React.FC<InitStateType> = (props:InitStateType) => {
    let phrasesElem = props.lessons[props.currentLesson].phrases.map((l)=><p>{l.text}</p>)
    return (
        <div>
            <p>
            {props.lessons[props.currentLesson].task}
            </p>
          {phrasesElem}            
        </div>
        
    );

}

export default LessList;