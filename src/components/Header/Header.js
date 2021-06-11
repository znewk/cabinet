import styles from "../../../styles/components/Header.module.css";
import Link from 'next/link'
import React, {useState} from "react";
import {BecomeAPartner} from "../Forms/BecomeAPartnerForm/BecomeAPartner";
import ModalWindow from "../Modal/ModalWindow";
import { YMInitializer } from 'react-yandex-metrika';
import { useRouter } from 'next/router'

export default function Header() {
    const [show, setShow] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const router = useRouter();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function metric(){
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(78186067, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    }

    return (
        <div id={'header'} className={styles.header}>
            <YMInitializer accounts={[78186067]} options={{webvisor: true, defer: true}} version="2" />
            <ModalWindow show={show} handleClose={handleClose} heading={'Стать партнёром'} body={<BecomeAPartner handleClose={handleClose}/>}/>

            <div className={styles.desktopHeader}>

                <div className={styles.logo}>
                    <Link href="/">
                        <a onClick={async() => {await router.push("https://www.oilan.io/")}} style={{alignContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <svg className={styles.svg} width="100" height="50" viewBox="-30 30 640 389" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96.38 338.745C80.7233 338.745 66.49 335.187 53.68 328.07C41.0733 320.953 31.11 310.888 23.79 297.875C16.6733 284.658 13.115 269.408 13.115 252.125C13.115 235.045 16.775 219.998 24.095 206.985C31.6183 193.768 41.785 183.703 54.595 176.79C67.405 169.673 81.74 166.115 97.6 166.115C113.46 166.115 127.795 169.673 140.605 176.79C153.415 183.703 163.48 193.667 170.8 206.68C178.323 219.693 182.085 234.842 182.085 252.125C182.085 269.408 178.222 284.658 170.495 297.875C162.972 310.888 152.703 320.953 139.69 328.07C126.677 335.187 112.24 338.745 96.38 338.745ZM96.38 314.345C106.343 314.345 115.697 312.007 124.44 307.33C133.183 302.653 140.198 295.638 145.485 286.285C150.975 276.932 153.72 265.545 153.72 252.125C153.72 238.705 151.077 227.318 145.79 217.965C140.503 208.612 133.59 201.698 125.05 197.225C116.51 192.548 107.258 190.21 97.295 190.21C87.1283 190.21 77.775 192.548 69.235 197.225C60.8983 201.698 54.1883 208.612 49.105 217.965C44.0217 227.318 41.48 238.705 41.48 252.125C41.48 265.748 43.92 277.237 48.8 286.59C53.8833 295.943 60.5933 302.958 68.93 307.635C77.2667 312.108 86.4167 314.345 96.38 314.345Z" fill="white"/>
                                <path className={styles.logoLetter} d="M94.59 108.48C89.8367 108.48 85.85 106.87 82.63 103.65C79.41 100.43 77.8 96.4433 77.8 91.69C77.8 86.9367 79.41 82.95 82.63 79.73C85.85 76.51 89.8367 74.9 94.59 74.9C99.19 74.9 103.1 76.51 106.32 79.73C109.54 82.95 111.15 86.9367 111.15 91.69C111.15 96.4433 109.54 100.43 106.32 103.65C103.1 106.87 99.19 108.48 94.59 108.48ZM107.47 125.27V252H81.25V125.27H107.47Z" fill="white"/>
                                <path d="M217.432 122.88V336H184.6V122.88H217.432ZM230.873 255.936C230.873 240 234.137 225.888 240.665 213.6C247.386 201.312 256.41 191.808 267.738 185.088C279.258 178.176 291.93 174.72 305.754 174.72C318.234 174.72 329.082 177.216 338.298 182.208C347.706 187.008 355.194 193.056 360.762 200.352V177.312H393.882V336H360.762V312.384C355.194 319.872 347.61 326.112 338.01 331.104C328.41 336.096 317.466 338.592 305.178 338.592C291.546 338.592 279.066 335.136 267.738 328.224C256.41 321.12 247.386 311.328 240.665 298.848C234.137 286.176 230.873 271.872 230.873 255.936ZM360.762 256.512C360.762 245.568 358.458 236.064 353.85 228C349.434 219.936 343.578 213.792 336.282 209.568C328.986 205.344 321.114 203.232 312.666 203.232C304.218 203.232 296.346 205.344 289.05 209.568C281.754 213.6 275.801 219.648 271.193 227.712C266.778 235.584 264.57 244.992 264.57 255.936C264.57 266.88 266.778 276.48 271.193 284.736C275.801 292.992 281.754 299.328 289.05 303.744C296.538 307.968 304.41 310.08 312.666 310.08C321.114 310.08 328.986 307.968 336.282 303.744C343.578 299.52 349.434 293.376 353.85 285.312C358.458 277.056 360.762 267.456 360.762 256.512ZM498.349 174.72C510.829 174.72 521.965 177.312 531.757 182.496C541.741 187.68 549.517 195.36 555.085 205.536C560.653 215.712 563.437 228 563.437 242.4V336H530.893V247.296C530.893 233.088 527.341 222.24 520.237 214.752C513.133 207.072 503.437 203.232 491.149 203.232C478.861 203.232 469.069 207.072 461.773 214.752C454.669 222.24 451.117 233.088 451.117 247.296V336H418.285V177.312H451.117V195.456C456.493 188.928 463.309 183.84 471.565 180.192C480.013 176.544 488.941 174.72 498.349 174.72Z" fill="white"/>
                            </svg>
                        </a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <ul className={styles.menu_ul}>
                        <li>
                            <Link href="/">
                                <a>Выбрать курсы</a>
                            </Link>
                        </li>
                        <li onClick={handleShow}>
                            <a className={styles.link}>Стать партнёром</a>
                        </li>
                        <li>
                            <Link href="/soon">
                                <a>
                                    Выбрать репетитора
                                    <sup style={{
                                        color: '#F71735',
                                        fontWeight: 700,
                                        marginBottom: 15
                                    }}>Soon</sup>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/soon">
                                <a>
                                    Стать репетитором
                                    <sup  style={{
                                        color: '#F71735',
                                        fontWeight: 700,
                                        marginBottom: 15
                                    }}>Soon</sup>


                                </a>
                            </Link>
                        </li>
                        <li><Link href="/soon">
                            <a>
                                Отзывы
                                <sup  style={{
                                    color: '#F71735',
                                    fontWeight: 700,
                                    marginBottom: 15
                                }}>Soon</sup>
                            </a>
                        </Link></li>
                    </ul>
                </div>

                <div onClick={() => { setShowMobileMenu(!showMobileMenu) }} className={styles.menuButtonBody}>
                    <img src="/header-menu.png" alt="menu" style={{width: '24px'}}/>
                    <span style={{
                        fontFamily: 'Gilroy Medium',
                        color: 'white',
                        fontSize: '18px',
                        marginLeft: '10px'
                    }}>Меню</span>
                </div>

            </div>

            {showMobileMenu ?
                (
                    <div className={styles.mobileMenu}>
                        <ul className={styles.menu_ul}>
                            <li>
                                <Link href="/">
                                    <a>Выбрать курсы</a>
                                </Link>
                            </li>
                            <li onClick={handleShow}>
                                <a className={styles.link}>Стать партнёром</a>
                            </li>
                            <li>
                                <Link href="/soon">
                                    <a>
                                        Выбрать репетитора
                                        <sup style={{
                                            color: '#F71735',
                                            fontWeight: 700,
                                            marginBottom: 15
                                        }}>Soon</sup>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/soon">
                                    <a>
                                        Стать репетитором
                                        <sup  style={{
                                            color: '#F71735',
                                            fontWeight: 700,
                                            marginBottom: 15
                                        }}>Soon</sup>


                                    </a>
                                </Link>
                            </li>
                            <li><Link href="/soon">
                                <a>
                                    Отзывы
                                    <sup  style={{
                                        color: '#F71735',
                                        fontWeight: 700,
                                        marginBottom: 15
                                    }}>Soon</sup>
                                </a>
                            </Link></li>
                        </ul>
                    </div>
                ) : null
            }

        </div>
    );
}
