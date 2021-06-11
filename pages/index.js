import Head from 'next/head'
import Header from '../src/components/Header/Header'
import styles from "../styles/components/content/Courses.module.css";
import CourseCard from "../src/components/CourseCard/CourseCard";
import HorizontalLine from "../src/components/HorizontalLine/HorizaontalLine";
import Footer from "../src/components/Footer/Footer";
import React, { useState, useEffect } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'
import SimpleSlider from "../src/components/SimpleSlider/SimpleSlider";
import StockCard from "../src/components/StockCard/StockCard";
import ContactButton from "../src/components/ContactButton/ContactButton";
import classnames from 'classnames';

const ym = () => {
    return (
        "<!-- Yandex.Metrika counter -->\n" +
        "<script type=\"text/javascript\" >\n" +
        "   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n" +
        "   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n" +
        "   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n" +
        "\n" +
        "   ym(78186067, \"init\", {\n" +
        "        clickmap:true,\n" +
        "        trackLinks:true,\n" +
        "        accurateTrackBounce:true,\n" +
        "        webvisor:true,\n" +
        "        ecommerce:\"dataLayer\"\n" +
        "   });\n" +
        "</script>\n" +
        "<noscript><div><img src=\"https://mc.yandex.ru/watch/78186067\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>\n" +
        "<!-- /Yandex.Metrika counter -->"
    );
}


const axios = require('axios').default;
const stockCards = [
     {
        courseName: 'GSC',
        title: 'Акция 50%',
        description: '50% скидка первым трем студентам!',
        url: 'gsc?id=3',
        backImage: 'https://s.zagranitsa.com/images/articles/6205/870x486/edc7951589f86d033ed06883ebca9f4d.jpg?1517228485'
    },
    {
        courseName: 'A-Stadium',
        title: 'Эксперт',
        description: 'Индивидуальные занятие с носителем языка!',
        url: 'gsc?id=3',
        backImage: 'https://www.forumdaily.com/wp-content/uploads/2017/03/Depositphotos_3958211_m-2015.jpg'
    },
    {
        courseName: 'OXBRIDGE',
        title: 'Олимпиада',
        description: 'Участвуй в олимпиаде и получи шанс выиграть абонемент на 1 бесплатный месяц обучения! Только для студентов Interpress!',
        url: 'gsc?id=3',
        backImage: 'https://i.u-mama.ru/article/93/9399.jpg'
    },
    {
        courseName: 'STARFORD',
        title: 'IELTS',
        description: 'Подготовка к сдаче экзамена IELTS',
        url: 'gsc?id=3',
        backImage: 'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-04/TASS_45071363.jpg?itok=wjpfwPEa'
    },
    {
        courseName: 'IZEREK',
        title: 'Онлайн-курс',
        description: 'Дистанционное обучние! Стал доступен онлайн курс! ',
        url: 'gsc?id=3',
        backImage: 'https://ia-centr.ru/upload/iblock/80b/80b1d04a8be4524dff35edb29f1ca121.jpg'
    },
    {
        courseName: 'IZEREK',
        title: 'Лучшее - детям',
        description: 'Детский игровой курс стал доступен!',
        url: 'gsc?id=3',
        backImage: 'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2018-08/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_Depositphotos_10800421_xl-2015.jpg?itok=jwiAFNVs'
    },
]

function Courses({props}) {
    const [courseCards, setCourseCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentCourseCategory, setCurrentCourseCategory] = useState("Все курсы")

    const searchCourses = async (directionId) => {
        await loadCourseCards(directionId)
    }

    const loadCourseCards = async (directionId) => {
        if(directionId !== undefined){
            let result =  await axios.get('https://oilan-backend.herokuapp.com/courseCards/' + directionId);
            setCourseCards(result.data);
        }else{
            let result = await axios.get('https://oilan-backend.herokuapp.com/courseCards');
            setCourseCards(result.data);
        }
    }

    useEffect(async () => {
        const params = new URLSearchParams(window.location.search);
        let direction = null;
        if(params.has('direction')){
            direction = params.get('direction');
        }

        if(direction !== null){
            await loadCourseCards(direction);
        }else{
            await loadCourseCards();
        }
        setLoading(false);
    }, courseCards)

    const filterBtnHandler = async (city, direction, price, isOnline) => {
        setLoading(true);

        let devDomain = "https://oilan-backend.herokuapp.com";
        const data = {
            city: city,
            direction: direction,
            price: price,
            isOnline: isOnline
        }
        let postResult = await axios.post(`${devDomain}/courseCardsFilter/`, data);
        setCourseCards(postResult['data']);
        document.querySelector('#coursesBlock').scrollIntoView({
            behavior: 'smooth'
        });

        setLoading(false);
    }

    return (
        <div>
            <Head>
                <title>Курсы</title>
                <link rel="icon" href="/atom-icon.png" />
                <div dangerouslySetInnerHTML={{__html: ym()}}/>
            </Head>

            <Header/>
            <ContactButton/>
            <div className={styles.containerItems} style={{paddingTop: '0px'}}>
                    <div className={styles.topHeader}>
                        <div className={styles.topHeaderBody}>
                            <p className={styles.subtitle} style={{margin: '0 0 5px 0'}}>
                                выберите удобные настройки поиска
                            </p>
                            {/*<p className={styles.subtitle} style={{fontSize: '16px', fontFamily: 'Gilroy Medium', textTransform: 'none', margin: 0}}>*/}
                            {/*    Настройте удобные параметры фильтра*/}
                            {/*</p>*/}
                            {/*<div className={styles.onOrOfflineBlock}>*/}
                            {/*        <div className={styles.formatInputBody}>*/}
                            {/*            <input type="radio" id='onlineFormat' name='eduFormat'*/}
                            {/*                   className={classnames(styles.formatInput, )}*/}
                            {/*                   onClick={() => {*/}
                            {/*                       if(showOfflineFilters === true){*/}
                            {/*                           setShowOfflineFilters(!showOfflineFilters);*/}
                            {/*                           setShowOnlineFilters(!showOnlineFilters);*/}
                            {/*                       } else {*/}
                            {/*                           setShowOnlineFilters(!showOnlineFilters);*/}
                            {/*                       }*/}
                            {/*                   }}*/}
                            {/*            />*/}
                            {/*            <label htmlFor='onlineFormat' className={classnames(styles.formatLabel,showOnlineFilters ? styles.activeFilter : null)}>Онлайн</label>*/}
                            {/*        </div>*/}

                            {/*        <div className={styles.formatInputBody}>*/}
                            {/*            <input type="radio" id='offlineFormat' name='eduFormat'*/}
                            {/*                   className={classnames(styles.formatInput)}*/}
                            {/*                   onClick={() => {*/}
                            {/*                       if(showOnlineFilters === true){*/}
                            {/*                           setShowOnlineFilters(!showOnlineFilters);*/}
                            {/*                           setShowOfflineFilters(!showOfflineFilters);*/}
                            {/*                       } else {*/}
                            {/*                           setShowOfflineFilters(!showOfflineFilters);*/}
                            {/*                       }*/}
                            {/*                   }}/>*/}
                            {/*            <label className={classnames(styles.formatLabel,showOfflineFilters ? styles.activeFilter : null)} htmlFor='offlineFormat' >Оффлайн</label>*/}
                            {/*        </div>*/}
                            {/*</div>*/}

                            <div className={styles.filter}>
                                <div className={styles.filterBlock}>
                                    <select name="citySelect" id="citySelect" className={styles.selectBlock}>
                                        <option value="0">Все города</option>
                                        <option value="1">Нур-Султан</option>
                                        {/*<option value="3">Прага</option>*/}
                                    </select>
                                    <select name="isOnlineSelect" id="isOnlineSelect" className={styles.selectBlock}>
                                        <option value="0">Формат занятий</option>
                                        <option value="1">Онлайн</option>
                                        <option value="2">Оффлайн</option>
                                    </select>
                                    <select
                                        name="directionSelect"
                                        id="directionSelect"
                                        className={styles.selectBlock}
                                    >
                                        <option value="0">Все направления</option>
                                        <option value="1">Английский</option>
                                        <option value="8">IELTS, TOEFL, SAT</option>
                                        <option value="2">Чешский</option>
                                        <option value="3">Турецкий</option>
                                        <option value="4">Арабский</option>
                                        <option value="5">Программирование</option>
                                        <option value="6">Тайм-менеджмент</option>
                                        <option value="7">Казахский</option>
                                    </select>
                                    <select
                                        name="directionSelect"
                                        id="directionSelect"
                                        className={styles.selectBlock}
                                    >
                                        <option value="0">Все центры</option>
                                        <option value="1">PROGRESS</option>
                                        <option value="2">GSCSTUDY</option>
                                        <option value="3">CRYSTAL ENGLISH</option>
                                        <option value="4">Starford</option>
                                        <option value="5">Izerek</option>
                                    </select>
                                    <select
                                        name="priceSelect"
                                        id="priceSelect"
                                        className={styles.selectBlock}
                                    >
                                        <option value="0">Любая цена</option>
                                        <option value="0-20000">0-20.000KZT</option>
                                        <option value="20000-40000">20.000-40.000KZT</option>
                                        <option value="40000-60000">40.000-60.000KZT</option>
                                        <option value="60000-80000">60.000-80.000KZT</option>
                                        <option value="80000-100000">80.000-100.000KZT</option>
                                        <option value="100000">100.000KZT+</option>
                                    </select>
                                </div>
                                <div className={styles.search_btnBody}>

                                    <div className={styles.search_btnDIV}>
                                        <img
                                            src="/search.png"
                                            alt=""
                                            className={styles.search_btn}
                                            onClick={()=>{
                                                let city = null;
                                                try{
                                                    city = Number(document.getElementById("citySelect").value);
                                                }catch{
                                                    city = 0;
                                                }

                                                let direction = Number(document.getElementById("directionSelect").value);
                                                //let center = Number(document.getElementById("centerSelect").value);
                                                let price = document.getElementById("priceSelect").value;
                                                let isOnline = document.getElementById("isOnlineSelect").value;

                                                filterBtnHandler(city, direction, price, isOnline);
                                            }}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                <div id={'coursesBlock'} className={styles.container}>
                    {loading ? (
                            <div className={styles.loader}>
                                <img src="/loader.gif" alt=""></img>
                            </div>
                        ) :
                        (
                            <>
                                <div className={styles.img_title}>
                                    <img src="/tick.png" alt=""/>
                                    <p>{currentCourseCategory}</p>
                                </div>
                                <div className={styles.courses_block}>
                                    {
                                        courseCards.length > 0 ?
                                            courseCards.map(course => {
                                                if(course.title !== 'test'){
                                                    return (
                                                        <CourseCard course={course}/>
                                                    )
                                                }
                                            })
                                            :
                                            (<p className={styles.message}>Курсов по этому направлению пока что нет! :(</p>)
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

            <div className={styles.whyUs}>
                <div className={styles.whyUsHeader}>
                    <span className={styles.whyUsTitle}>Почему лучше выбрать курс с Oilan</span>
                </div>

                <div className={styles.container} style={{paddingBottom: 0}}>
                    <div className={styles.whyUsContentBlock}>
                        <div className={styles.whyUsCard}>
                            <div className={styles.whyUsCardImg}>
                                <img src="/whyus_filter.png" alt=""/>
                            </div>
                            <div className={styles.whyUsCardDescBody}>
                                <span className={styles.whyUsCardTitle}>Система подбора</span>
                                <span className={styles.whyUsCardDesc}>Фильтрация позволяет найти любой курс за
                                    считанные секунды, подходящие по цене, по месту и по рейтингу</span>
                            </div>
                        </div>

                        <div className={styles.whyUsCard}>
                            <div className={styles.whyUsCardImg}>
                                <img src="/whyus_motivation.png" alt=""/>
                            </div>
                            <div className={styles.whyUsCardDescBody}>
                                <span className={styles.whyUsCardTitle}>Мотивация</span>
                                <span className={styles.whyUsCardDesc}>Скидки на разные курсы так же система геймификации в ходе которой ученики
                                    будут получать валюту платформы и обменивать ее на крутые призы</span>
                            </div>
                        </div>

                        <div className={styles.whyUsCard}>
                            <div className={styles.whyUsCardImg}>
                                <img src="/whyus_content.png" alt=""/>
                            </div>
                            <div className={styles.whyUsCardDescBody}>
                                <span className={styles.whyUsCardTitle}>Контент</span>
                                <span className={styles.whyUsCardDesc}>Отзывы и оценки курсов позволят подобрать
                                    подходящие курсы и преподавателей за короткий срок</span>
                            </div>
                        </div>

                        <div className={styles.whyUsCard}>
                            <div className={styles.whyUsCardImg}>
                                <img src="/whyus_message.png" alt=""/>
                            </div>
                            <div className={styles.whyUsCardDescBody}>
                                <span className={styles.whyUsCardTitle}>Система оповещений</span>
                                <span className={styles.whyUsCardDesc}>
                                    Telegram-бот для уведомления
                                    о новых добавленных клиентах и
                                    всех обновлениях на онлайн-образовательной
                                    платформе и мобильном приложении
                                </span>
                            </div>
                        </div>

                        <div className={styles.whyUsCard}>
                            <div className={styles.whyUsCardImg}>
                                <img src="/whyus_control.png" alt=""/>
                            </div>
                            <div className={styles.whyUsCardDescBody}>
                                <span className={styles.whyUsCardTitle}>Контроль качества</span>
                                <span className={styles.whyUsCardDesc}>У каждого курса формируется рейтинг исходя из отзывов студентов,
                                    благодаря которому курс будет подниматься выше в списке</span>
                            </div>
                        </div>

                        <div className={styles.whyUsCard}>
                            <div className={styles.whyUsCardImg}>
                                <img src="/whyus_goal.png" alt=""/>
                            </div>
                            <div className={styles.whyUsCardDescBody}>
                                <span className={styles.whyUsCardTitle}>Новые навыки</span>
                                <span className={styles.whyUsCardDesc}>
                                    Получайте знания от ведущих образовательных центров вашего города
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className={styles.stockSlider} >*/}
            {/*    <div className={styles.stocksHeader}>*/}
            {/*        <span className={styles.stocksTitle}>АКТУАЛЬНЫЕ АКЦИИ</span>*/}
            {/*    </div>*/}
            {/*    <div style={{padding: '20px 0 60px 0', width: '100%'}}>*/}
            {/*        <SimpleSlider stocks={stockCards}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Footer/>
        </div>

    )


}





export default Courses;
