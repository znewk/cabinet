import styles from '../../../styles/components/CreateCourseCard.module.css'
import Link from "next/link";
import React, {useState} from "react";
import classnames from 'classnames';
import globals from "../../globals";

const axios = require('axios').default;

export default function CreateCourseCard(props) {
    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showContacts, setShowContacts] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [create, setCreate] = useState(false)

    const getCurrentDateTime = () => {
        let currentDate = new Date();

        let dd = currentDate.getDate();
        if(dd < 10) dd = '0' + dd;

        let mm = currentDate.getMonth()+1;
        if(mm < 10) mm = '0' + mm;

        let yy = currentDate.getFullYear();

        let hours = currentDate.getHours();
        let min = currentDate.getMinutes();
        let sec = currentDate.getSeconds();

        return yy + "-" + mm + "-" + dd + " " + hours + ":" + min + ":" + sec;
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleImage__Body}>
                <div className={styles.titleImageWrapper}>
                    <div className={styles.titleImageBody}
                         style={{
                             backgroundImage: 'url("https://unimind.com.ua/images/UK_University_of_Liverpool_02_900-compressor.jpg")'
                         }}
                    >
                    </div>
                </div>
                <div className={styles.image_block} style={{
                    backgroundImage: 'url(https://gscstudy.kz/img/logo.svg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundColor: 'white',
                    border: '1px solid white'
                }}>
                </div>
            </div>
            {create ? null : (
                <div className={styles.createBlock}
                    onClick={()=>{
                        setCreate(!create)
                    }}
                >
                    <button className={styles.createButton}>+</button>
                </div>
            ) }

            {create ? (
                <div className={styles.info_block}>
                    <div style={{}}>
                        <div className={styles.titleBlock}>
                            <div>
                                <p className={styles.course_title}>{props.course.centerName}</p>
                            </div>
                            <div className={styles.socnetBlock} style={{marginBottom: 5}}>
                                {props.course.instagram ? (
                                    <>
                                        <a href={`https://www.instagram.com/${props.course.instagram}/`}>
                                            <img src="/instagram.png" className={styles.icons} alt=""/>
                                        </a>
                                    </>
                                ) : null || undefined }
                                {props.course.website !== null ? (
                                    <>
                                        <a href={`${props.course.website}`}>
                                            <img src="/network.png" className={styles.icons} alt=""/>
                                        </a>
                                    </>
                                ) : null }
                            </div>
                        </div>
                        <div>

                        </div>

                        <div className={styles.inputBody}>
                            <input type="text" className={classnames(styles.select, styles.input)} placeholder="Название курса"/>
                        </div>

                        {/*<p className={styles.contactsButton}>Контакты и соц.сети</p>*/}

                        <div style={{}}>
                            <p className={styles.info_title}>Контакты: </p>
                            <div>
                                <span onClick={async () => {
                                    setShowPhoneNumber(!showPhoneNumber)
                                }} className={classnames(styles.info_small, styles.phone)}>
                                    {props.course.phones}
                                </span>
                            </div>
                                <p className={styles.info_title}>Описание курса:</p>
                                <div className={styles.inputBody}>
                                    <textarea className={styles.textArea}></textarea>
                                </div>

                                <p className={styles.info_title}>Ожидаемый результат:</p>
                                <div className={styles.inputBody}>
                                    <textarea className={styles.textArea}></textarea>
                                </div>

                                <p className={styles.info_title}>Необходимые начальные знания:</p>
                                <div className={styles.inputBody}>
                                    <select className={styles.select}>
                                        <option value="Begginer">Begginer</option>
                                        <option value="Elementary">Elementary</option>
                                        <option value="Pre-intermidiate">Pre-intermidiate</option>
                                        <option value="Intermidiate">Intermidiate</option>
                                        <option value="Upper-intermidiate">Upper-intermidiate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>

                                <p className={styles.info_title}>Продолжительность курса: </p>
                                    <div className={classnames(styles.inputBody, styles.flexbox)}>
                                        <select className={classnames(styles.select, styles.select50)} >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        <select className={classnames(styles.select, styles.select50)} >
                                            <option value="Неделя">Неделя</option>
                                            <option value="Месяц">Месяц</option>
                                            <option value="Год">Год</option>
                                        </select>
                                    </div>

                                <p className={styles.info_title}>Возрастная категория: </p>
                            <div className={classnames(styles.inputBody, styles.flexbox)}>
                                <input min={3} max={60} type="number" className={classnames(styles.select, styles.input, styles.select50)} placeholder="От"/>
                                <input min={3} max={60} type="number" className={classnames(styles.select, styles.input, styles.select50)} placeholder="До"/>
                            </div>

                                <p className={styles.info_title}>Вид занятий: </p>
                            <div className={styles.inputBody}>
                                <select className={styles.select}>
                                    <option value="Групповые занятия">Групповые занятия</option>
                                    <option value="Индивидуальные занятия">Индивидуальные занятия</option>
                                </select>
                            </div>

                                <p className={styles.info_title}>Формат занятий: </p>
                            <select className={styles.select}>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.linkButtonBody}>
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <button className={classnames(styles.cancel_button)}
                                    onClick={()=>{
                                        setCreate(!create)
                                    }}
                            >Добавить</button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <button className={styles.cancel_button}
                                    onClick={()=>{
                                        setCreate(!create)
                                    }}
                            >Отмена</button>
                        </div>
                    </div>

                </div>
            ) : null}

        </div>
    )
}
