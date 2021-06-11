import styles from '../../../styles/components/EditCourseCard.module.css'
import Link from "next/link";
import React, {useState} from "react";
import {SignupToCourseForm} from "../Forms/SignupToCourseForm/SignupToCourseForm";
import ModalWindow from "../Modal/ModalWindow";
import classnames from 'classnames';
import globals from "../../globals";

const axios = require('axios').default;

export default function EditCourseCard(props) {
    const [edit, setEdit] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showContacts, setShowContacts] = useState(false)

    const [showControlPanel, setShowControlPanel] = useState(false)
    const [editCourseTitle, setEditCourseTitle] = useState('English for kids')
    const [editCoursePrice, setEditCoursePrice] = useState(36000)

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
                             backgroundImage: `url(https://unimind.com.ua/images/UK_University_of_Liverpool_02_900-compressor.jpg)`
                         }}
                    >
                    </div>
                </div>
                <div className={styles.image_block} style={{
                    backgroundImage: `url(https://gscstudy.kz/img/logo.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundColor: 'white',
                    border: '1px solid white'
                }}>
                </div>
            </div>

            <div className={styles.info_block}>
                <div style={{}}>
                    <div className={styles.titleBlock}>
                        <div>
                            <p className={styles.course_title}>{props.course.centerName}</p>
                        </div>
                        <div className={styles.socnetBlock} style={{marginBottom: 5}}>
                            {props.course.instagram ? (
                                <>
                                    <a onClick={async () => {
                                        await axios.post(`${globals.devDomain}/logUserClick/`, {
                                            datetime: getCurrentDateTime(),
                                            courseTitle: props.course.course_title,
                                            subcourseTitle: props.course.title,
                                            eventName: "Instagram"
                                        });
                                    }} target='_blank' href={`https://www.instagram.com/${props.course.instagram}/`}>
                                        <img src="/instagram.png" className={styles.icons} alt=""/>
                                    </a>
                                </>
                            ) : null || undefined }
                            {props.course.website !== null ? (
                                <>
                                    <a onClick={async () => {
                                        await axios.post(`${globals.devDomain}/logUserClick/`, {
                                            datetime: getCurrentDateTime(),
                                            courseTitle: props.course.course_title,
                                            subcourseTitle: props.course.title,
                                            eventName: "Website"
                                        });
                                    }} target='_blank' href={`${props.course.website}`}>
                                        <img src="/network.png" className={styles.icons} alt=""/>
                                    </a>
                                </>
                            ) : null }
                        </div>
                    </div>
                    <div className={styles.info_smallBody}>
                        <input className={styles.title} disabled={edit ? false : true} value={editCourseTitle}
                               onChange={event => {
                                   setEditCourseTitle(event.target.value);
                               }}/>
                    </div>

                    <div style={{}}>
                        <p className={styles.info_title}>Контакты: </p>
                        <div>
                                <span className={classnames(styles.info_small, styles.phone)}>{props.course.phones}</span>
                        </div>

                        <div className={classnames(showInfo ? styles.show : styles.hide)}>

                            <p className={styles.info_title}>Описание курса:</p>
                            <div className={styles.info_smallBody}>
                                <textarea className={styles.textArea} disabled={edit ? false : true}>
                                    Английский для самых маленьких
                                </textarea>
                            </div>

                            <p className={styles.info_title}>Ожидаемый результат:</p>
                            <div className={styles.info_smallBody}>
                                <textarea className={styles.textArea} disabled={edit ? false : true}>
                                    Вы чему-то научитесь
                                </textarea>
                            </div>

                            <p className={styles.info_title}>Необходимые начальные знания:</p>
                            <div className={styles.info_smallBody}>
                                <select className={styles.select} disabled={edit ? false : true} value='Elementary'>
                                    <option value="Begginer">Begginer</option>
                                    <option value="Elementary">Elementary</option>
                                    <option value="Pre-intermidiate">Pre-intermidiate</option>
                                    <option value="Intermidiate">Intermidiate</option>
                                    <option value="Upper-intermidiate">Upper-intermidiate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>

                            <p className={styles.info_title}>Продолжительность курса: </p>
                            {edit ? (
                                <div className={classnames(styles.info_smallBody, styles.flexbox)}>
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
                            ) : (
                                <p className={styles.info_small}>6 мес.</p>
                            )}



                            <p className={styles.info_title}>Возрастная категория: </p>
                            {edit ? (
                                <div className={classnames(styles.info_smallBody, styles.flexbox)}>
                                    <input min={3} max={60} type="number" className={classnames(styles.select, styles.input, styles.select50)} placeholder="От"/>
                                    <input min={3} max={60} type="number" className={classnames(styles.select, styles.input, styles.select50)} placeholder="До"/>
                                </div>
                            ) : (
                                <p className={styles.info_small}>6-9</p>
                            )}



                            <p className={styles.info_title}>Вид занятий: </p>
                            <div className={styles.info_smallBody}>
                                <select className={styles.select} disabled={edit ? false : true} value='Индивидуальные занятия'>
                                    <option value="Групповые занятия">Групповые занятия</option>
                                    <option value="Индивидуальные занятия">Индивидуальные занятия</option>
                                </select>
                            </div>

                            <p className={styles.info_title}>Формат занятий: </p>
                            <div className={styles.info_smallBody}>
                                <select className={styles.select} disabled={edit ? false : true} value={'Offline'}>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                            <p className={styles.info_title}>Цена/Месяц: </p>
                            <div className={styles.info_smallBody}>
                                    <input className={classnames(styles.title,styles.input, styles.select50)} disabled={edit ? false : true} value={editCoursePrice}
                                           onChange={event => {
                                               setEditCoursePrice(event.target.value);
                                           }}
                                        type='number'
                                    /> <span className={styles.info_smallSPAN}>KZT/Месяц</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.linkButtonBody}>
                    {/*<div style={{alignItems: 'center', width: '100%', textAlign: 'center', marginBottom: '15px'}}>*/}
                    {/*    <a className={styles.showHideBtn} onClick={() => {*/}
                    {/*        setShowInfo(!showInfo);*/}
                    {/*    }}>{showInfo ? 'Скрыть' : 'Показать больше'}</a>*/}

                    {/*    <img src="/arrow-bottom.png" alt="" onClick={() => {*/}
                    {/*        setShowInfo(!showInfo);*/}
                    {/*    }}*/}
                    {/*         className={ showInfo ? styles.hideArrow : styles.showArrow}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <p className={styles.info_price}>Цена: {editCoursePrice} KZT/Месяц</p>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <button onClick={async () => {
                            if(!showInfo){
                                setShowInfo(true);
                            }else{
                                setShowInfo(false);
                            }
                        }}
                                className={styles.info_button}>{showInfo ? 'Скрыть' : 'Показать больше'}</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <a className={styles.info_button}
                        onClick={()=>{
                            if(edit){
                                // soxranenie
                                setEdit(!edit)
                            }else{
                                setEdit(!edit)
                            }
                        }}
                        >{edit ? 'Сохранить изменения' : 'Редактировать'}</a>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <a className={styles.info_button}>Удалить</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
