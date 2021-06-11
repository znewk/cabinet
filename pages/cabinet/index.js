import Head from 'next/head'
import Header from '../../src/components/Header/Header'
import styles from "../../styles/Cabinet/Cabinet.module.css";
import CourseCard from "../../src/components/CourseCard/CourseCard";
import Footer from "../../src/components/Footer/Footer";
import React, { useState, useEffect } from "react";
import 'react-animated-slider/build/horizontal.css'
import ContactButton from "../../src/components/ContactButton/ContactButton";
import classnames from 'classnames';
import CreateCourseCard from "../../src/components/CreateCourseCard/CreateCourseCard";
import EditCourseCard from "../../src/components/EditCourseCard/EditCourseCard";
import CreateTeacherCard from "../../src/components/CreateTeacherCard/CreateTeacherCard";
import EditTeacherCard from "../../src/components/EditTeacherCard/EditTeacherCard";


const axios = require('axios').default;
function Cabinet(){

    const course = {
        centerName: 'GSC STUDY',
        description: 'Образование за рубежом - основная отрасль нашего образовательного центра в Астане GSC. Мы помогаем студентам получить достойное качественное образование за границей в самых топовых и престижных учебных заведениях. После обучения за рубежом, студентов ждет разнообразная интересная и высокооплачиваемая работа, а также большой карьерный рост. GSC дает уникальную возможность для каждого студента осуществить свою мечту. Наши языковые курсы помогут каждому овладеть иностранными языками самых высоких уровней, что намного улучшит результаты учебы за рубежом.',
        phones: '+7 708 615 7439',
        addresses: 'Сарайшык 34, Офис №9',
        instagram: 'gscstudy.kz',
        website: '/'
    }

    const [showControlPanel, setShowControlPanel] = useState(false)
    const [editSettings, setEditSettings] = useState(false)
    const [courseTitle, setCourseTitle] = useState(course.centerName)
    const [coursePhones, setCoursePhones] = useState(course.phones)
    const [courseAddresses, setCourseAddresses] = useState(course.addresses)
    const [courseInstagram, setCourseInstagram] = useState(course.instagram)


    return (
        <div style={{background: 'linear-gradient(90deg, rgba(60,88,185,1) 0%, rgba(119,148,248,1) 100%)'}}>
            <Head>
                <title>Oilan - Личный кабинет</title>
                <link rel="icon" href="/atom-icon.png" />
            </Head>

            <Header/>
            <ContactButton/>
            <div style={{width: '100%', }}>

            </div>
            <div className={styles.container}>
                <div className={styles.headerBlock}>
                    <div className={styles.logoBody}>
                        <div className={styles.logo}
                             style={{backgroundImage: 'url(https://gscstudy.kz/img/logo.svg)'}}
                        >

                        </div>
                    </div>

                    <div className={styles.headerRightBlock}>
                        <div className={styles.headerTitleBlock}>
                            <div className={styles.centerNameBody}>
                                <input className={styles.centerName}
                                       type='text'
                                       disabled={editSettings ? false : true}
                                       value={courseTitle}
                                       onChange={event => {
                                           setCourseTitle(event.target.value);
                                       }}
                                       placeholder='Наименование центра'/>
                                <div className={styles.ratingBlock}>
                                    <img src="/star.png" alt="" className={styles.starIcon}/>
                                    <img src="/star.png" alt="" className={styles.starIcon}/>
                                    <img src="/star.png" alt="" className={styles.starIcon}/>
                                    <img src="/star.png" alt="" className={styles.starIcon}/>
                                    <img src="/star.png" alt="" className={styles.starIcon}/>
                                    <span className={styles.ratingValue}>5.0</span>
                                </div>
                            </div>
                            <div className={styles.controlPanel}>
                                {showControlPanel ? (
                                    <div className={styles.controlPanelItems} >
                                        <button className={styles.controlPanelItem}>
                                            Настройки аккаунта
                                        </button>
                                        <button className={styles.controlPanelItem}
                                            onClick={()=>{
                                                setEditSettings(!editSettings)
                                            }}
                                            style={editSettings ? {backgroundColor: 'greenyellow', color: 'white'} : null }
                                        >
                                            {editSettings ? 'Сохранить' : 'Редактировать'}
                                        </button>
                                        <button className={styles.controlPanelItem}>
                                            Статистика
                                        </button>
                                    </div>
                                ) : null}
                                
                                <div className={styles.controlPanelShowHideButton}
                                    onClick={()=>{
                                        setShowControlPanel(!showControlPanel)
                                    }}
                                >
                                    <span style={{fontFamily: 'Gilroy Bold', color: 'white'}}>{showControlPanel ? '-' : '+'}</span>

                                </div>
                            </div>
                        </div>

                        <div className={styles.centerInfoBlock}>
                                <div className={styles.centerDescriptionBody}>
                                    <textarea name="" id="" className={styles.textArea}
                                              disabled={editSettings ? false : true}
                                              placeholder='Описание учебного центра'>
                                        {course.description}
                                    </textarea>
                                </div>
                            <div className={styles.centerSubInfoBlock}>
                                <div className={styles.subInfoBlock}>
                                    <div className={styles.subInfoBlockHeader}>
                                        <img src="/cabinetAddressIcon.png" alt="" className={styles.icons}
                                        style={{transform: 'scale(0.9)'}}
                                        />
                                        <span className={styles.sunInfoTitle}>Адрес:</span>
                                    </div>
                                    <div className={styles.subInfoBlockFooter}>
                                        <select name="" id="" className={styles.select} style={{color: '#263A59'}} disabled={editSettings ? false : true}
                                        style={{color: '#263A59'}}>
                                            <option value="1">г. Нур-Султан</option>
                                            <option value="1">г. Алматы</option>
                                        </select>
                                        <input type="text" name="" id="" className={styles.subInfoDesc} value={courseAddresses}
                                               disabled={editSettings ? false : true} placeholder={'Адрес филиала'}
                                               onChange={event => {
                                                   setCourseAddresses(event.target.value);
                                               }}
                                        />
                                    </div>
                                </div>

                                <div className={styles.subInfoBlock}>
                                    <div className={styles.subInfoBlockHeader}>
                                        <img src="/cabinetPhoneIcon.png" alt="" className={styles.icons}
                                             style={{transform: 'scale(0.9)'}}
                                        />
                                        <span className={styles.sunInfoTitle}>Контакты:</span>
                                    </div>
                                    <div className={styles.subInfoBlockFooter}>
                                        <input type="text" name="" id="" className={styles.subInfoDesc} value={coursePhones}
                                               disabled={editSettings ? false : true} placeholder={'Телефон'}
                                               onChange={event => {
                                                   setCoursePhones(event.target.value);
                                               }}
                                        />
                                    </div>
                                </div>

                                <div className={styles.subInfoBlock}>
                                    <div className={styles.subInfoBlockHeader}>
                                        <img src="/cabinetSocialNetworkIcon.png" alt="" className={styles.icons}
                                             style={{transform: 'scale(0.9)'}}
                                        />
                                        <span className={styles.sunInfoTitle}>Соц. сети:</span>
                                    </div>
                                    <div className={styles.subInfoBlockHeader}>
                                        <img src="/cabinetInstagramIcon.png" alt="" className={styles.icons}
                                             style={{transform: 'scale(0.9)'}}
                                        />
                                        <input type="text" name="" id="" className={styles.subInfoDesc} value={courseInstagram}
                                               disabled={editSettings ? false : true} placeholder={'Инстаграм'}
                                               onChange={event => {
                                                   setCourseInstagram(event.target.value);
                                               }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.container}>
                <div className={styles.title_block} >
                    <img src="/two-books.png" style={{height: '18px'}} alt=""/>
                    <span style={{
                        fontSize: 24,
                        fontFamily: 'Gilroy Bold',
                        marginLeft: 10
                    }}>Ваши курсы</span>
                </div>
                <div className={styles.coursesBlock}>
                    <CreateCourseCard course={course}/>
                    <EditCourseCard course={course}/>
                    <EditCourseCard course={course}/>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title_block} >
                    <img src="/teacher.png" style={{height: '18px'}} alt=""/>
                    <span style={{
                        fontSize: 24,
                        fontFamily: 'Gilroy Bold',
                        marginLeft: 10
                    }}>Ваши учителя</span>
                </div>
                <div className={styles.coursesBlock}>
                    <CreateTeacherCard/>
                    <EditTeacherCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}





export default Cabinet;
