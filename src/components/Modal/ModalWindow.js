import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";
import styles from '../../../styles/components/ModalWindow.module.css'
export default function ModalWindow(props) {
    if(props.contactForm !== undefined ){
     return (
         <Modal  show={props.show} onHide={props.handleClose} style={{marginTop: '25vh'}}>
             <Modal.Body className={styles.modalBody} style={{padding: '0'}}>

                 {props.body}</Modal.Body>
         </Modal>
     )
    } else{
        return (
            <Modal  show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: 'Gilroy Regular', color: 'black', fontSize: '20px'}}>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>{props.body}</Modal.Body>
            </Modal>
        )
    }


}