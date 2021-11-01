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

type InitStateType = { lessons: Array<LessonType> };

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
        }
    ]
};

const lessonsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default lessonsReducer;
