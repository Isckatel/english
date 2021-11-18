const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';
//Action Creater
export const setCurrentLesson = (id:number) => ({type:SET_CURRENT_LESSON, id})
type ActionSetCurrentLessonType = ReturnType<typeof setCurrentLesson>

type PhraseType = {text: string, isCompleted: boolean};

type LessonType = {
    id: number,
    numbe: string,
    name: string,
    task: string,
    phrases: Array<PhraseType>,
    isCompleted: boolean,
    addition:string
};

export type InitStateType = { lessons: Array<LessonType>, currentLesson: number };

let initialState: InitStateType = {
    lessons:[
        {
            id:1,
            numbe: "1.1", 
            name: "Времена",
            task: "Прогнать эти фразы по таблице",
            phrases: [
                {text:"Я живу", isCompleted: false},
                {text:"Он живет", isCompleted: false},
                {text:"Вы работаете", isCompleted: false},
                {text:"Она работает", isCompleted: false}
            ],            
            isCompleted:false,
            addition: ""
        },
        {
            id:2,
            numbe: "1.2", 
            name: "Времена",
            task: "Прогнать эти фразы по таблице",
            phrases: [
                {text:"Они открывают", isCompleted: false},
                {text:"Она закрвает", isCompleted: false},
                {text:"Мы видим", isCompleted: false},
                {text:"Он приходит", isCompleted: false}
            ],            
            isCompleted:false,
            addition: ""
        }
    ],
    currentLesson: 1
};

const lessonsReducer = (state = initialState, action: ActionSetCurrentLessonType) => {
    switch (action.type) {
        case SET_CURRENT_LESSON:
            return {
                ...state,
                currentLesson: action.id
            }
        default:
            return state;
    }
}

export default lessonsReducer;
