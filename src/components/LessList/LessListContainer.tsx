import {StateType} from '../../redux/store';
import {connect, ConnectedProps} from 'react-redux';
import {setCurrentLesson} from '../../redux/lessons-reducer';
import LessList from './LessList';

let mapStateToProps = (state:StateType) => ({
    lessons: state.lessons.lessons
});

const connector = connect(mapStateToProps,{setCurrentLesson});
type PropsLessListType = ConnectedProps<typeof connector>;

const LessListContainer = (props:PropsLessListType ) => {
    let lessons = props.lessons.map(
        (l)=>({id:l.id, number: l.numbe, name: l.name})
    );
    return (
        <LessList lessons={lessons} setCurrentLesson={props.setCurrentLesson}/>
    );
};

export default connect(mapStateToProps,{setCurrentLesson})(LessListContainer);