import {StateType} from '../../redux/store';
import {connect, ConnectedProps} from 'react-redux';
import CurrLess from './CurrLess';

let mapStateToProps = (state:StateType) => ({
    lessons: state.lessons.lessons,
    currentLesson: state.lessons.currentLesson
});

const connector = connect(mapStateToProps);
type PropsCurrLessType = ConnectedProps<typeof connector>;

const CurrLessContainer = (props:PropsCurrLessType ) => {   
    return (
        <CurrLess lessons={props.lessons} currentLesson={props.currentLesson} />
    );
};

export default connect(mapStateToProps)(CurrLessContainer);