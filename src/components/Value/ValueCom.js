import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from '../../assets/Images'
import style from '../navbar/style'
import styles from './style'

function ValueCom(props) {
    return (
        <div>
           <Container fluid >
               <Row>
                   <Col xs={12} md={3} >
                        <img src={Image.ValueImage} style={styles.valueImage} alt='valueimage' />
                   </Col>
                   <Col xs={12} md={9}>
                        <p style={styles.valueTitle}>{props.text}</p>
                        <p style={styles.valueDetail}>Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.</p>
                        <p style={styles.learnMore}>Learn More <i className="fas fa-chevron-right"></i></p>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default ValueCom

