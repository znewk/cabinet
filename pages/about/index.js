import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../src/components/Header/Header'
import HomeContent from "../../src/components/Content/HomeContent/HomeContent";
import Footer from "../../src/components/Footer/Footer";
import ContactButton from "../../src/components/ContactButton/ContactButton";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Oilan</title>
                <link rel="icon" href="/atom-icon.png" />
            </Head>

            <ContactButton/>
            <Header/>
            <HomeContent/>

            <Footer/>
        </div>

    )
}
