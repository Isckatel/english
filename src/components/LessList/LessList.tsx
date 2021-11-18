import React from 'react';

type LessonType = {id:number, number:string, name: string};
type  LessonsType =  {
    lessons: Array<LessonType>,
    setCurrentLesson: (id:number) => void
}

const LessList: React.FC<LessonsType> = (props:LessonsType) => {
    let lessElem = props.lessons.map((l)=>{
        return (
            <div>
            <button onClick={()=>{props.setCurrentLesson(l.id)}}>
                {l.number + ' ' + l.name}
            </button>
            </div>
        );
    });
    return (
        <div>
            {lessElem}
        </div>
        
    );

}

export default LessList;