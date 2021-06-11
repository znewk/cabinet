import Head from 'next/head'
import Header from '../../src/components/Header/Header'
import styles from "../../styles/components/content/SignIn.module.css";
import CourseCard from "../../src/components/CourseCard/CourseCard";
import HorizontalLine from "../../src/components/HorizontalLine/HorizaontalLine";
import Footer from "../../src/components/Footer/Footer";
import React, { useState, useEffect } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'
import SimpleSlider from "../../src/components/SimpleSlider/SimpleSlider";
import StockCard from "../../src/components/StockCard/StockCard";
import ContactButton from "../../src/components/ContactButton/ContactButton";
import classnames from 'classnames';
import Courses from "../index";
import {useRouter} from "next/router";
const axios = require('axios').default;
const bcrypt = require('bcryptjs');

function SignIn(){
    const router = useRouter();

    async function register(centerName, login, password, website, addresses, phone, cityId){
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);

        let data = {
            title: centerName,
            login: login,
            password: password,
            website_url: website,
            addresses: addresses,
            phones: phone,
            city_id: cityId,
        }

        const result = await axios.post('https://oilan-backend.herokuapp.com/courses/register', data);

        if(result.status !== 200){
            await router.push("https://www.oilan.io/")
        }else{
            console.log("errorritto");
        }
    }

    async function login(login, password){
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);

        let data = {
            login: login,
            password: password,
        }

        const result = await axios.post('https://oilan-backend.herokuapp.com/courses/login', data);

        if(result.status !== 200){
            await router.push("https://www.oilan.io/")
        }else{
            console.log("errorritto");
        }
    }

    return(
        <div>
            <Head>
                <title>Авторизация</title>
                <link rel="icon" href="/atom-icon.png" />
            </Head>

            <Header/>
            <ContactButton/>

            <div className={styles.signInBody}>
                <img src="/motivation.png" className={styles.bgPic} alt=""/>
                <img src="/soon.png" className={styles.bgPic2} alt=""/>
                <div className={styles.formsBlock}>

                    <div className={classnames(styles.formBody)}>
                        <div className={styles.titleBlock}>
                            <span className={styles.title}>Регистрация</span>
                        </div>
                        <div className={styles.form}>
                            <input type="text" className={styles.input} required placeholder='Наименование учебного центра' id='registerCenterName'/>
                            <input type="text" className={styles.input} required minLength={6} placeholder='Логин' id='registerLogin'/>
                            <input type="password" className={styles.input} required minLength={6} placeholder='Пароль' id='registerPassword'/>
                            <input type="text" className={styles.input} placeholder='Вебсайт (необязательно)' id='registerWebsite'/>
                            <input type="text" className={styles.input} placeholder='Адрес (если есть)' id='registerAddresses'/>
                            <input type="text" className={styles.input} required placeholder='Телефон' id='registerPhones'/>
                            <select name="" id="registerCityId">
                                <option value="1">Нур-Султан</option>
                            </select>
                            <div className={styles.submitBtnBody} >
                                <input
                                    type="submit"
                                    className={styles.submitBtn}
                                    value='Отправить'
                                    onClick={ async () => {
                                        let centerName = document.querySelector('#registerCenterName').value
                                        let registerLogin = document.querySelector('#registerLogin').value
                                        let registerPassword = document.querySelector('#registerPassword').value
                                        let registerWebsite = document.querySelector('#registerWebsite').value
                                        let registerAddresses = document.querySelector('#registerAddresses').value
                                        let registerPhones = document.querySelector('#registerPhones').value
                                        let registerCityId = document.querySelector('#registerCityId').value
                                        await register(centerName,registerLogin,registerPassword,registerWebsite,registerAddresses,registerPhones,registerCityId);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={classnames(styles.formBody)}>
                        <div className={styles.titleBlock}>
                            <span className={styles.title}>Вход</span>
                        </div>
                        <form action="" method='POST' className={styles.form}>
                            <input type="text" className={styles.input} placeholder='Логин' id='loginLogin'/>
                            <input type="password" className={styles.input} placeholder='Пароль' id='loginPassword'/>
                            <div className={styles.submitBtnBody} >
                                <input
                                    type="submit"
                                    className={styles.submitBtn}
                                    onClick={ async() => {
                                        let userLogin = document.querySelector('#loginLogin').value;
                                        let userPassword = document.querySelector('#loginPassword').value;

                                        await login(userLogin,userPassword);
                                    }}
                                    value='Отправить'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default SignIn;