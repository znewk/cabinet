import styles from "../../../styles/components/StockCard.module.css";
import Link from "next/link";

function StockCard (props){
    return (
        <Link href={`/courses/${props.course.url}`}>
            <div className={styles.stockCard} style={{backgroundImage: `url("${props.course.backImage}")`}}>
                <div className={styles.backHover}>
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>{props.course.title}</span> <br/>
                        <span className={styles.courseName}>{props.course.courseName}</span> <br/>
                        <div className={styles.descriptionBody}>
                            <span className={styles.description}>{props.course.description}</span> <br/> <br/>
                            <span className={styles.courseName}>Для перехода нажмите в любом месте...</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default StockCard;