import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './style.js';
import CustomButton from '../ButtonCom/index.js';
import Image from '../../assets/Images'
import BannerCom from './BannerCom.js';
 
function Banner() {
    return (
        <>
        <Container  style={styles.container} >
            <Row style={styles.row} >
                <Col xs={12} md={8} xl={6} style={styles.leftCol} >
                    <BannerCom
                    mainHeading={'Reliable Web Hosting Platform for Your Website'}
                    bannerDetail={'  Lorem ipsum dolor sit amet, consectetur adipiscing elitut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'}
                    />
                <Col>
                <CustomButton
                text={'Try for 7 days free'}
                style={styles.bannerButton}
                />
                <CustomButton
                text={'Choose your plan'}
                style={styles.bannerButton2nd}
                />
                </Col>
                </Col>
               
                <Col xs={12} md={8} xl={6}  style={styles.bannerSecond}>
                    <BannerCom
                    image={Image.BannerSecondImage}
                    />
                   
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Banner
