import styles from '../../../styles/components/CreateTeacherCard.module.css'
import Link from "next/link";
import React, {useState} from "react";
import classnames from 'classnames';
import globals from "../../globals";

const axios = require('axios').default;

export default function CreateTeacherCard(props) {
    const [showInfo, setShowInfo] = useState(false)
    const [create, setCreate] = useState(false)

    return (
        <div className={styles.teacherCard} >
            <div style={{backgroundImage: `url(https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder-300x300.gif)`,}}
                 className={styles.imageBlock}
            >
                <div className={styles.hoverBlock}>
                    {create ? (<input type="file" className={styles.inputFile}/>) : null}
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
                    <div className={styles.tabCourseCardTitleBLock}>
                        <p className={styles.info_title}>Имя преподавателя: </p>
                        <input type="text" className={classnames(styles.select, styles.input)} placeholder='ФИО'/>

                        <p className={styles.info_title}>Краткая биография: </p>
                        <div className={styles.inputBody}>
                            <textarea className={styles.textArea}></textarea>
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
