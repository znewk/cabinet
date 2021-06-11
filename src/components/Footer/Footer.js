import styles from '../../../styles/components/Footer.module.css'
import FooterLink from "../FooterLink/FooterLink";
import Link from "next/link";
import React, {useState} from "react";
import {BecomeAPartner} from "../Forms/BecomeAPartnerForm/BecomeAPartner";
import ModalWindow from "../Modal/ModalWindow";

export default function Footer(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let firstColumn = {
        title: "Проект",
        items: [
            {
                name: "О нас",
                route: "/about"
            },
            {
                name: "Политика конфиденциальности",
                route: "/PrivacyPolicy"
            },
        ]
    };
    let secondColumn = {
        title: "Взаимодействие",
        items: [
            {
                name: "Публичная оферта",
                route: "/offer"
            },
        ]
    };
    let thirdColumn = {
        title: "Соц. сети",
        items: [
            {
                name: "Instagram",
                route: "https://www.instagram.com/oilan.io/?hl=ru"
            },
            {
                name: "Facebook",
                route: "https://www.facebook.com/oilan.io"
            },
        ]
    };
    return (
        <div className={styles.container}>
            <ModalWindow show={show} handleClose={handleClose} heading={'Стать партнёром'} body={<BecomeAPartner handleClose={handleClose}/>}/>
            <div>
                <Link href="/">
                    <a style={{alignContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img src="/oilan-logo.png" alt="logotype" className={styles.logoImage} style={{
                            alignContent: 'center',
                            alignItems: 'center',

                        }}/>
                    </a>
                </Link>
            </div>
            <div></div>
            <div>
                <p className={styles.title}>
                    {firstColumn.title}
                </p>
                {firstColumn.items.map((item) => <FooterLink name={item.name} route={item.route}/>)}
            </div>
            <div>
                <p className={styles.title}>
                    {secondColumn.title}
                </p>
                {secondColumn.items.map((item) => <FooterLink name={item.name} route={item.route}/>)}
                <a className={styles.footerLink} onClick={handleShow}>Стать партнёром</a>
            </div>
            <div>
                <p className={styles.title}>
                    {thirdColumn.title}
                </p>
                {thirdColumn.items.map((item) => <FooterLink name={item.name} route={item.route}/>)}
            </div>
            <div></div>
        </div>
    )
}
