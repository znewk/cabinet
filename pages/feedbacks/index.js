import Head from 'next/head'
import styles from '../../styles/components/content/Courses.module.css'
import Header from '../../src/components/Header/Header'
import HomeContent from "../../src/components/Content/HomeContent/HomeContent";
import CoursesListItem from "../../src/components/CoursesListItem/CoursesListItem";
import Feedback from "../../src/components/Feedback/Feedback";
import Footer from "../../src/components/Footer/Footer";

// export async function getStaticProps(context) {
//     const res = await fetch(`http://localhost:3001/feedbacks`)
//     const data = await res.json()
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//
//     console.log(data);
//
//     return {
//         props: { data }, // will be passed to the page component as props
//     }
// }

export default function Feedbacks(props) {
    return (
        <div>
            {/*<Head>*/}
            {/*    <title>Отзывы</title>*/}
            {/*    <link rel="icon" href="/atom-icon.png" />*/}
            {/*</Head>*/}

            {/*<Header/>*/}

            {/*<div className={styles.container}>*/}
            {/*    {props.data.map(item =>*/}
            {/*        <div style={{*/}
            {/*            width: '100%',*/}
            {/*            margin: '2%',*/}
            {/*            height: '100%'*/}
            {/*        }}>*/}
            {/*            <Feedback feedback={item}/>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}



        </div>
    )
}