import Head from 'next/head'
import styles from '../styles/components/content/course.module.css'
import Header from '../src/components/Header/Header'
import Footer from "../src/components/Footer/Footer";
import HorizontalLine from "../src/components/HorizontalLine/HorizaontalLine";
import CourseCard from "../src/components/CourseCard/CourseCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/SimpleSlider/SimpleSlider";
import CourseTeacherCard from "../src/components/CourseTeacherCard/CourseTeacherCard";
import Link from "next/link";
import ContactButton from "../src/components/ContactButton/ContactButton";
import {SignupToCourseForm} from "../src/components/Forms/SignupToCourseForm/SignupToCourseForm";
import ModalWindow from "../src/components/Modal/ModalWindow";
import {Map, Placemark, YMaps} from 'react-yandex-maps';

const axios = require('axios').default;

function coursePage(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [instagram,setInstagram] = useState(false)
    // if(props.courseDetails.instagram !== null){
    //     setInstagram(!instagram)
    // }

    function drawStar(count){
        switch (count){
            case 1:
                return(
                    <>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                    </>
                )
                break;
            case 2:
                return(
                    <>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                    </>)
                break;
            case 3:
                return(
                    <>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                    </>)
                break;
            case 4:
                return(
                    <>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/gray_star.png" alt="" className={styles.starIcon}/>
                    </>)
                break;
            case 5:
                return(
                    <>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                        <img src="/star.png" alt="" className={styles.starIcon}/>
                    </>)
                break;
        }

    }
    return (
        <div style={{background: 'linear-gradient(90deg, rgba(60,88,185,1) 0%, rgba(119,148,248,1) 100%)'}}>
            <ModalWindow show={show} handleClose={handleClose} heading={'Запись на курс'} body={<SignupToCourseForm course={props.courseDetails} handleClose={handleClose}/>}/>
            <Head>
                <title>Oilan - {props.course.title}</title>
                <link rel="icon" href="/atom-icon.png" />
            </Head>

            <Header/>
            <ContactButton/>

            {/*<div className={styles.headerImage}*/}
            {/*     style={{*/}
            {/*         backgroundImage: `url(${props.course.background_image_url})`*/}
            {/*     }}*/}
            {/*>*/}

            {/*</div>*/}




            <div className={styles.container} style={{padding: '20px', boxSizing: 'border-box', marginTop: '10px'}}>
                <div className={styles.headerBlock}>
                    <div className={styles.logoBody}>
                        <div className={styles.logo}
                             style={{backgroundImage: `url(${props.course.img_src})`}}
                        >

                        </div>
                        <div className={styles.courseInfo_contacts}>

                            <p className={styles.info_title} style={{marginTop: '10px'}}>Образовательный центр: </p>
                            <div className={styles.info_smallBody} style={{alignItems: 'flex-start'}}>
                                <img src="/school.png" alt=""/>
                                <p className={styles.info_small}>{props.course.title}</p>
                            </div>

                            {props.courseDetails.isonline ? null : (
                                <>
                                    <p className={styles.info_title}>Адрес: </p>
                                    <div className={styles.info_smallBody}>
                                        <img src="/geo.png" style={{height: '14px'}} alt=""/>
                                        <p className={styles.info_small}>{props.course.addresses}</p>
                                    </div>
                                </>
                            )
                            }

                            <p className={styles.info_title}>Ожидаемый результат:</p>
                            <div className={styles.info_smallBody}>
                                <img src="/certificate.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.expected_result}</p>
                            </div>

                            <p className={styles.info_title}>Необходимые начальные знания:</p>
                            <div className={styles.info_smallBody}>
                                <img src="/two-books.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.start_requirements}</p>
                            </div>

                            <p className={styles.info_title}>Продолжительность курса: </p>
                            <div className={styles.info_smallBody}>
                                <img src="/duration.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.duration}</p>
                            </div>

                            <p className={styles.info_title}>Расписание: </p>
                            <div className={styles.info_smallBody}>
                                <img src="/calendar.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.schedule}</p>
                            </div>

                            <p className={styles.info_title}>Возрастная категория: </p>
                            <div className={styles.info_smallBody}>
                                <img src="/term.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.ages}</p>
                            </div>

                            <p className={styles.info_title}>Вид занятий: </p>
                            <div className={styles.info_smallBody}>
                                <img src="/users.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.type}</p>
                            </div>

                            <p className={styles.info_title}>Формат занятий: </p>
                            <div className={styles.info_smallBody}>
                                <img src="/network.png" alt=""/>
                                <p className={styles.info_small}>{props.courseDetails.format}</p>
                            </div>



                            {props.courseDetails.instagram === null ?
                                null
                                :
                                <>
                                    <p className={styles.info_title}>Соц. сети: </p>
                                    <div className={styles.info_smallBody}>
                                        <img src="/instagram.png" alt=""/>
                                        <a href={`https://www.instagram.com/${props.courseDetails.instagram}/`} style={{color: 'blue'}} className={styles.info_small}>@{props.courseDetails.instagram}</a>
                                    </div>
                                </>
                            }


                        </div>
                    </div>

                    <div className={styles.headerRightBlock}>
                        <div className={styles.headerTitleBlock}>
                            <div className={styles.centerNameBody}>
                                <span className={styles.centerName} style={{fontSize: '18px'}}>{props.course.title}</span> <br/>
                                <span className={styles.centerName}>{props.courseDetails.title} </span>
                                <div className={styles.ratingBlock}>
                                    {drawStar(parseInt(props.courseDetails.rating))}
                                    <span className={styles.ratingValue}>{props.course.rating}</span>
                                </div>
                            </div>
                            <div className={styles.subtitle} style={{display: 'flex'}}>
                                <p className={styles.info_price}>{props.courseDetails.price} KZT</p>
                                <button onClick={handleShow} className={styles.linkButton}>Отправить заявку</button>
                            </div>
                        </div>

                        <div className={styles.centerInfoBlock}>
                            <div className={styles.centerDescriptionBody}>
                                    <span className={styles.info_title}>Информация о учебном центре:</span> <br/>
                                    <span name="" id="" className={styles.textArea}>
                                        {props.course.description}
                                    </span>
                            </div>
                            <div className={styles.centerSubInfoBlock}>
                                {props.courseDetails.isonline ? null : (
                                    <div className={styles.subInfoBlock}>
                                        <div className={styles.subInfoBlockHeader}>
                                            <img src="/cabinetAddressIcon.png" alt="" className={styles.icons}
                                                 style={{transform: 'scale(0.9)'}}
                                            />
                                            <span className={styles.sunInfoTitle}>Адрес:</span>
                                        </div>
                                        <div className={styles.subInfoBlockFooter}>
                                            <span className={styles.subInfoDesc}>{props.course.addresses}</span>
                                        </div>
                                    </div>)
                                }

                                <div className={styles.subInfoBlock}>
                                    <div className={styles.subInfoBlockHeader}>
                                        <img src="/cabinetPhoneIcon.png" alt="" className={styles.icons}
                                             style={{transform: 'scale(0.9)'}}
                                        />
                                        <span className={styles.sunInfoTitle}>Контакты:</span>
                                    </div>
                                    <div className={styles.subInfoBlockFooter}>
                                        <span className={styles.subInfoDesc}>{props.course.phones}</span>
                                    </div>
                                </div>
                                {props.courseDetails.instagram === null ?
                                    null
                                    : (
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
                                                <a href={`https://www.instagram.com/${props.courseDetails.instagram}/`} style={{color: 'blue'}} className={styles.subInfoDesc}>@{props.courseDetails.instagram}</a>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                        <div style={{width: '100%', marginTop: '20px'}}>
                            {
                                props.course.hasTeachersInfo ?
                                    (
                                        <div>
                                            <p className={styles.info_title}>
                                                Преподаватели курса
                                            </p>
                                            <hr/>

                                            <div className={styles.allCoursesTab} >
                                                {props.teachers.map(item => <CourseTeacherCard teacher={item}/>)}
                                            </div>
                                        </div>
                                    ) :
                                    null
                            }
                        </div>
                    </div>
                </div>

                {props.courseDetails.isonline ? null : (
                    <>
                        <div className={styles.flex} style={{marginTop: '3%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            
                            <div className={styles.title_block}>
                                <img src="/geo.png" style={{height: '18px'}} alt=""/>
                                <span style={{
                                    fontSize: 24,
                                    fontFamily: 'Gilroy Bold',
                                    marginLeft: 10
                                }}>Местоположение</span>
                            </div>
                        </div>

                        <div style={{height: 600, width: '100%', borderRadius: '30px'}}>
                            <YMaps className={styles.ymaps}>
                                <Map width={'100%'} height={'100%'} defaultState={{ center: [props.courseDetails.latitude, props.courseDetails.longitude], zoom: 16 }} >
                                    <Placemark geometry={[props.courseDetails.latitude, props.courseDetails.longitude]} />
                                </Map>
                            </YMaps>
                        </div>
                    </>
                )}

            </div>





            <div className={styles.container} style={{padding: '20px', marginTop: 30}}>
                <div className={styles.flex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div className={styles.title_block} >
                        <img src="/two-books.png" style={{height: '18px'}} alt=""/>
                        <span style={{
                            fontSize: 24,
                            fontFamily: 'Gilroy Bold',
                            marginLeft: 10
                        }}>Похожие курсы</span>
                    </div>
                </div>

                <div>
                    <div className={styles.courses_block}>
                        {props.similarCourses.slice(0, 4).map(course => (
                            <CourseCard course={course}/>
                        ))}
                    </div>
                </div>
                <div className={styles.backToCoursesPageButtonBody}>
                    <Link href="/">
                        <a className={styles.backToCoursesPageButton}>Все курсы</a>
                    </Link>
                </div>
            </div>

            <br/><br/><br/><br/>

            <Footer/>
        </div>
    )
}

export async function getServerSideProps(context){
    console.log("Context query:");
    console.log(context.query);
    if(context.query.id !== undefined){
        let devDomain = "https://oilan-backend.herokuapp.com";

        let courseDetailsResult = await axios.post(`${devDomain}/courseCards/` + context.query.id);
        let courseDetails = courseDetailsResult['data'][0];

        let courseResult = await axios.get(`${devDomain}/courses/` + courseDetails.course_id);
        let courseInfo = courseResult['data'][0];

        let similarCoursesResult = await axios.get(`${devDomain}/courseCards/` + courseInfo.course_category_id);
        let subCoursesResult = await axios.post(`${devDomain}/subcourses/` + courseInfo.id);
        let teachersResult = await axios.post(`${devDomain}/teachers/` + courseInfo.id);

        console.log("Latitude: " + courseDetails.latitude);
        console.log("Longitude: " + courseDetails.longitude);

        console.log("subcourses:");
        console.log(subCoursesResult);

        return {
            props: {
                course: courseInfo,
                similarCourses: similarCoursesResult['data'],
                subcourses: subCoursesResult['data'],
                teachers: teachersResult['data'],
                courseDetails: courseDetails
            }
        }
    }
}

export default coursePage;
