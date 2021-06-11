import styles from '../../../styles/components/Feedback.module.css'
import moment from 'moment'
export default function Feedback(props) {
    let datetime = new Date(props.feedback.datetime.replace(' ', 'T'));
    moment.locale('ru');
    let date = moment().format('lll');


    return (
        <div className={styles.feedback_item}>
            <div className={styles.fullname}>
                {props.feedback.fullname}
            </div>
            <div className={styles.datetime}>
                {date}
            </div>

            <hr className={styles.hr}/>

            <div className={styles.text}>
                {props.feedback.text}
            </div>
        </div>
    )
}