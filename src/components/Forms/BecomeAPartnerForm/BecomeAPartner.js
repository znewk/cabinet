import React, { useState } from "react";
import styles from '../../../../styles/components/form.module.css'
const axios = require('axios').default;


export function BecomeAPartner(props) {
    const [companyName, setCompanyName] = useState("");
    const [contactName, setContactName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage]= useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const data = {
            company_name: companyName,
            fullname: contactName,
            phone: phone,
            email: email
        };

        const result = await axios.post('https://oilan-backend.herokuapp.com/partnershipRequests', data);

        console.log(result.data);

        setMessage("Заявка успешно отправлена!");
    }
    return (
        <form onSubmit={handleSubmit} className={styles.formBody} style={{margin: '15px'}}>
            <input
                type="text"
                value={companyName}
                placeholder={'Наименование компании'}
                minLength={4}
                required
                onChange={e => setCompanyName(e.target.value)}
                className={styles.partnerFormInput}
            />
            <input
                type="tel"
                pattern="8[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                required
                minLength={11}
                maxLength={11}
                value={phone}
                placeholder={'Ваш номер телефона'}
                onChange={e => setPhone(e.target.value)}
                className={styles.partnerFormInput}
            />
            <span style={{marginBottom: 10, fontSize: 18}} className={styles.courseDescription}>Пример номера:
                <span style={{color: 'darkgreen'}}> 81112223344</span>
            </span>
            <input
                type="email"
                value={email}
                minLength={5}
                required
                placeholder={'Адрес электронной почты'}
                onChange={e => setEmail(e.target.value)}
                className={styles.partnerFormInput}
            />
            <input
                type="text"
                value={contactName}
                placeholder={'Контактное лицо'}
                onChange={e => setContactName(e.target.value)}
                className={styles.partnerFormInput}
                minLength={6}
                required
            />
            <p className={styles.message}>{message}</p>
            <input type="submit" value="Оставить заявку" className={styles.formSubmit}/>
        </form>
    );
}