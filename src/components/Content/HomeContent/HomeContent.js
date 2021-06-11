import styles from "../../../../styles/components/content/HomeContent.module.css";
import Carousel from "../../Carousel/Carousel";
import Link from "next/link";
import HorizontalLine from "../../HorizontalLine/HorizaontalLine";
import CourseCard from "../../CourseCard/CourseCard";
import {useRef} from "react";

export default function HomeContent() {
    const myRef = useRef(null);
    return (
        <div style={{width: '100%'}}>
            <div className={styles.main_block}>
                <div className={styles.flex_block} style={{alignItems: 'center'}}>
                    <div className={styles.container}>
                        <div className={styles.main_block_links_block}>
                            <ul className={styles.main_block_links_list}>
                                <li>
                                    <p
                                        className={styles.main_blocks_links_p}
                                        onClick={() => {
                                            document.querySelector('#what_is_oilan').scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >Что такое Oilan?</p>
                                </li>
                                <li>
                                    <p
                                        className={styles.main_blocks_links_p}
                                        onClick={() => {
                                            document.querySelector('#why_oilan').scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >Почему именно мы</p>
                                </li>
                                <li>
                                    <p
                                        className={styles.main_blocks_links_p}
                                        onClick={() => {
                                            document.querySelector('#ca').scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >Наша аудитория</p>
                                </li>
                            </ul>
                        </div>
                        <p className={styles.main_text_big}>
                            Стань лучшим с Oilan!
                        </p>
                        <p className={styles.main_text_small}>
                            Все образовательные центры по разным направлениям <br/>
                            собраны в одном месте и отсортированы по рейтингу
                        </p>
                    </div>
                    <div className={styles.main_img}>
                        <img src="/main-image.png" alt="" width={'100%'} style={{marginTop: '0vh'}}/>
                    </div>
                </div>
                <div className={styles.arrow_bottom_block}>
                    <img src="/arrow-bottom.png" alt=""/>
                </div>
                <br/><br/>
            </div>

            <div className={styles.contentBlock}>
                <div className={styles.container}>
                    <div className={styles.flex_block}>
                        <div className={styles.what_is_oilan_description} id={'what_is_oilan'}>
                            <p style={{
                                marginTop: 50,
                                fontSize: 38,
                                color: '#F68939',
                                fontFamily: 'NeoSansPro Bold'
                            }}>
                                Что такое Oilan?
                            </p>
                            <div>
                                <div className={styles.why_us_block}>
                                    <div>
                                        <img src="/number-one-icon.png" alt=""/>
                                    </div>
                                    <div>
                                        <p style={{fontSize: 18, fontFamily: 'NeoSansPro Medium'}}>Маркетплейс лучших образовтельных центров и репетиторов в Казахстане</p>
                                    </div>
                                </div>

                                <div className={styles.why_us_block}>
                                    <div>
                                        <img src="/number-two-icon.png" alt=""/>
                                    </div>
                                    <div>
                                        <p style={{fontSize: 18, fontFamily: 'NeoSansPro Medium'}}>Эффективный инструмент для увеличения Ваших продаж</p>
                                    </div>
                                </div>

                                <div className={styles.why_us_block}>
                                    <div>
                                        <img src="/number-three-icon.png" alt=""/>
                                    </div>
                                    <div>
                                        <p style={{fontSize: 18, fontFamily: 'NeoSansPro Medium'}}>Гарантированное привлечение новых клиентов</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.community_img}>
                            <img src="/community.png" alt="" width={'100%'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contentBlock} style={{marginTop: '5%', marginBottom: '5%'}}>
                <div className={styles.container}>
                    <div className={styles.flex_block}>
                        <div className={styles.flex_3}>
                            <HorizontalLine/>
                        </div>
                        <div className={styles.flex_3}  id={'why_oilan'}>
                            <p className={styles.contentBlockTitle} style={{margin: 0, color: '#7794F8'}}>Почему именно мы?</p>
                        </div>
                        <div className={styles.flex_3}>
                            <HorizontalLine/>
                        </div>
                    </div>
                </div>

                <div className={styles.flex_block} style={{marginTop: '5%', justifyContent: 'space-around'}}>
                    <div className={styles.feature_block} style={{backgroundColor: 'rgba(255, 123, 2, 0.5)'}}>
                        <div style={{textAlign: 'center'}}>
                            <img src="/choice.png" width={'100%'} alt=""/>
                        </div>
                        <div style={{padding: '5px 20px'}}>
                            <p className={styles.main_text_small} style={{color: 'white', textAlign: 'center', fontSize: '18px'}}>
                                <b style={{fontSize: '24px'}}>Система подбора</b> <br/> <br/>
                                Фильтрация позволяет найти любой
                                курс за считанные секунды, подходящий
                                по цене, по месту и по рейтингу
                            </p>
                        </div>
                    </div>
                    <div className={styles.feature_block} style={{backgroundColor: 'rgba(255, 180, 2, 0.5)'}}>
                        <div style={{textAlign: 'center'}}>
                            <img src="/motivation.png" width={'100%'} alt=""/>
                        </div>
                        <div style={{padding: '5px 10px'}}>
                            <p className={styles.main_text_small} style={{color: 'white', textAlign: 'center', fontWeight: '500', fontSize: '18px'}}>
                                <b style={{fontSize: '24px'}}>Мотивация</b> <br/> <br/>
                                Скидки на разные курсы, так же система
                                геймификации, в ходе которой ученики будут получать
                                валюту платформы и обменивать ее на крутые призы
                            </p>
                        </div>
                    </div>
                    <div className={styles.feature_block} style={{backgroundColor: 'rgba(255, 180, 2, 0.5)'}}>
                        <div style={{textAlign: 'center'}}>
                            <img src="/content.png" width={'100%'} alt=""/>
                        </div>
                        <div style={{padding: '5px 20px'}}>
                            <p className={styles.main_text_small} style={{color: 'white', textAlign: 'center', fontWeight: '500', fontSize: '18px'}}>
                                <b style={{fontSize: '24px'}}>Контент</b> <br/> <br/>
                                Отзывы и оценки курсов позволят подобрать подходящие курсы и преподавателей за короткий срок
                            </p>
                        </div>
                    </div>
                    <div className={styles.feature_block} style={{backgroundColor: 'rgba(255, 123, 2, 0.5)'}}>
                        <div style={{textAlign: 'center'}}>
                            <img src="/phone-hands.png" width={'100%'} alt=""/>
                        </div>
                        <div style={{padding: '5px 10px', }}>
                            <p className={styles.main_text_small} style={{color: 'white', textAlign: 'center', fontWeight: '500', fontSize: '18px'}}>
                                <b style={{fontSize: '24px'}}>Система оповещений</b> <br/><br/>
                                Telegram-бот для уведомления <br/>
                                о новых добавленных клиентах и всех обновлениях на онлайн-образовательной платформе и мобильном приложении
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ca_block} id={'ca'}>
                <div style={{width: '100%', display: 'flex'}}>
                    <div className={styles.flex_2}>
                        <p className={styles.contentBlockTitle} style={{color: '#fff', fontSize: 38}}>Наша целевая аудитория</p>

                        <div style={{display: 'flex', width: '100%'}}>
                            <div className={styles.dialogue_block_left}>
                                Люди, которые хотят освоить новые навыки
                            </div>
                            <div style={{width: '50%'}}></div>
                        </div>
                        <div style={{display: 'flex', width: '100%'}}>
                            <div style={{width: '50%'}}></div>
                            <div className={styles.dialogue_block_right}>
                                Люди, желающие изучать иностранные языки, а так же поступающие за границу
                            </div>
                        </div>
                        <div style={{display: 'flex', width: '100%'}}>
                            <div className={styles.dialogue_block_left}>
                                Выпускники, сдающие ЕНТ, NUFIP
                            </div>
                            <div style={{width: '50%'}}></div>
                        </div>
                        <div style={{display: 'flex', width: '100%'}}>
                            <div style={{width: '50%'}}></div>
                            <div className={styles.dialogue_block_right}>
                                Школьники, желающие подтянуть свои знания в определенных предметах
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.contentBlock}>
                {/*<p className={styles.contentBlockTitle} style={{textAlign: 'center', marginBottom: '3%'}}>*/}
                {/*    Быстрый способ записать на ваш курс*/}
                {/*</p>*/}

                {/*<div className={styles.courses_block}>*/}
                {/*    <CourseCard title={'GSC'} description={'lolololololololololololololololo'} course_image={'https://gscstudy.kz/img/slides/0af22ae2421ed5f9e7f8c5cf80fcaa2f.jpg'}/>*/}
                {/*    <CourseCard title={'GSC'} description={'lolololololololololololololololo'} course_image={'https://gscstudy.kz/img/slides/0af22ae2421ed5f9e7f8c5cf80fcaa2f.jpg'}/>*/}
                {/*</div>*/}
                {/*<div className={styles.courses_block}>*/}
                {/*    <CourseCard title={'GSC'} description={'lolololololololololololololololo'} course_image={'https://gscstudy.kz/img/slides/0af22ae2421ed5f9e7f8c5cf80fcaa2f.jpg'}/>*/}
                {/*    <CourseCard title={'GSC'} description={'lolololololololololololololololo'} course_image={'https://gscstudy.kz/img/slides/0af22ae2421ed5f9e7f8c5cf80fcaa2f.jpg'}/>*/}
                {/*</div>*/}

                <div style={{width: '100%', textAlign: 'center', marginTop: '3%'}}>
                    <button className={styles.orange_button}>
                        <Link href={'/'}>
                            Смотреть все курсы
                        </Link>
                    </button>
                </div>

            </div>

            <br/><br/>
            <br/><br/>
        </div>
    );
}
