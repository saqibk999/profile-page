import styles from '@/styles/ProfileActivityComponent.module.css'
import {AiOutlineClockCircle, AiOutlineHeart} from 'react-icons/ai'
import {BsPatchQuestion} from 'react-icons/bs'
import {RiTodoLine} from 'react-icons/ri'

const ProfileActivity = (props) => {
    const { createdAt, doubtsAnswered, bestAnswers, thanksRecieved, questionsAnsweredCorrectly} = props.obj
    return (
        <>
        <div className={styles.mainContainer}>
            <span>
                About me
            </span>
            <div className={styles.grid}>
                <div><AiOutlineClockCircle style={{marginRight:10}}/> Member since {createdAt}</div>
                <div><BsPatchQuestion style={{marginRight:10}}/> {doubtsAnswered} Doubts Answered & {bestAnswers} Best Answers</div>
                <div><AiOutlineHeart style={{marginRight:10}}/> {thanksRecieved} Thanks Recieved</div>
                <div><RiTodoLine style={{marginRight:10}}/> {questionsAnsweredCorrectly} Questions Answered Correctly</div>
            </div>
        </div>
        </>
    );
}

export default ProfileActivity;