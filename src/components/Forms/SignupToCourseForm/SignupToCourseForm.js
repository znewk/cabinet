import React, {useEffect, useState} from "react";
import styles from '../../../../styles/components/form.module.css'
const axios = require('axios').default;
const bcrypt = require('bcryptjs');
import { init } from 'emailjs-com';
import * as emailjs from "emailjs-com";
import { useRouter } from 'next/router'
import globals from "../../../globals";
import moment from 'moment'
moment.locale('ru');

let verificationCode = (Math.floor(Math.random() * 999999) + 100000).toString();

export function SignupToCourseForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subMessage, setSubMessage] = useState("");
    const [ofertaCheck, setOfertaCheck] = useState(false);
    const router = useRouter();

    const EMAIL_USER_ID = "user_ff1FMAT2kdXu57dcA5kiB";

    const sendVerificationCode = async (clientEmail) => {

    }

    const createPayment = async (reference_id) => {
        let paymentHost = "https://finddifferences.club/proxy";
        let secret_key = "CbYf5sAuv4VJyFz9cD9x";

        const salt = bcrypt.genSaltSync(10);

        let paymentData = {
            reference_id: reference_id,
            request_url: "http://oilan-backend.herokuapp.com/handlepayment",
            back_url: "http://oilan-backend.herokuapp.com/handlepayment",
            amount: props.course.price,
            description: "Оплата за курс",
            merchant_id: 66,
            secret_key: bcrypt.hashSync(reference_id + secret_key, salt)
        };

        const result = await axios.post(
            `${paymentHost}/invoice/create`,
            paymentData,
            {headers: {'Access': 'application/json '}}
        );

        if(result['data']['success']){
            let redirectUrl = result['data']['data']['redirect_url'];
            await router.push(redirectUrl)
        }else{
            console.log(result);
        }
    }

    const validateInputs = () => {
        return name !== '' && email !== '' && phone !== '' && ofertaCheck;
    }

    const sendCodeButtonHandler = async (evt) => {
        evt.preventDefault();
        if (validateInputs()){
            await sendVerificationCode(email);
        }else{
            setMessage("Заполните все поля");
            setSubMessage("Кроме кода подтверждения");
        }
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if(validateInputs()){

            let currentDate = moment().format();
            let reference_id = Math.floor(Math.random() * 999999) + 1;

            let clientData = {
                fullname: name,
                subcourse_id: props.course.id,
                email: email,
                date: currentDate,
                phone: phone,
                pay_sum: props.course.price,
                payment_reference_id: reference_id,
                paid: false
            }

            await axios.post(`${globals.devDomain}/clients/`, clientData);

            await axios.post(`${globals.devDomain}/newStudent/`, clientData);

            //await createPayment(reference_id);
            setMessage("Вы успешно записались на курс!");
            setSubMessage("Проверьте почту!");
        }else{
            setMessage("Заполните все поля!");
        }

        props.handleClose();
    }

    return (
        <div className={styles.form}>
            <div>
                <span className={styles.courseTitle} >{props.course.title}</span>
                <div style={{margin: '10xp 0', display: 'flex', alignItems: 'center'}}>
                    <img src="/Vector.png" alt="" className={styles.titleVector} /><span className={styles.courseDescription}>{props.course.description}</span>
                </div>
                <div style={{marginTop: '10px'}}>
                    <span className={styles.courseInfoTitle}>Продолжительность курса:</span>
                </div>
                <span className={styles.courseDescription}>{props.course.duration}</span>
                <div style={{marginTop: '10px'}}>
                    <span className={styles.courseInfoTitle}>Расписание:</span>
                </div>
                <span className={styles.courseDescription}>{props.course.schedule}</span>
                <div style={{marginTop: '10px'}}>
                    <span className={styles.coursePrice}>{props.course.price}KZT/Месяц</span>
                </div>
            </div>
            <br/>
            <form className={styles.formBody} onSubmit={handleSubmit}>
                <div className={styles.formInputBody}>
                    <img src="/userVector.png" alt="" className={styles.inputImg} />
                    <input
                        type="text"
                        value={name}
                        placeholder={'ФИО'}
                        onChange={e => setName(e.target.value)}
                        className={styles.formInput}
                    />
                </div>

                <div className={styles.formInputBody}>
                    <img src="/mailVector.png" alt="" className={styles.inputImg} style={{height: '12px', top: '12px'}}/>
                    <input
                        type="text"
                        value={email}
                        placeholder={'Эл. почта'}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.formInput}
                    />
                </div>
                {/*<span className={styles.courseDescription}>Код будет отправлен на указанную Вами почту!</span>*/}
                {/*<div className={styles.codeBlock}>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        value={code}*/}
                {/*        placeholder={'Код подтверждения'}*/}
                {/*        onChange={e => setCode(e.target.value)}*/}
                {/*        className={styles.codeInput}*/}
                {/*    />*/}
                {/*    <button*/}
                {/*        className={styles.codeButton}*/}
                {/*        onClick={sendCodeButtonHandler}*/}
                {/*    >Получить код</button>*/}
                {/*</div>*/}
                <div className={styles.formInputBody}>
                    <img src="/phoneVector.png" alt="" className={styles.inputImg} style={{width: '12px', left: '9px'}} />
                    <input
                        type="tel"
                        value={phone}
                        placeholder={'Номер телефона'}
                        onChange={e => setPhone(e.target.value)}
                        className={styles.formInput}
                    />
                </div>
                <label style={{fontFamily: 'NeoSansPro Medium', color: '#0016D9'}}>
                    <input
                        type="checkbox"
                        onClick={() => {
                            setOfertaCheck(!ofertaCheck)
                        }}
                    /> Я принимаю условия <a href="/offer" style={{color: '#0016D9', textDecoration: 'underline'}}>публичной оферты.</a>
                </label>
                <p className={styles.message}>{message}</p>
                <p className={styles.message}>{subMessage}</p>
                <input type="submit" value="Отправить заявку" className={styles.formSubmit}/>
            </form>
        </div>

    );
}
