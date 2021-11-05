import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import CustomButton from '../ButtonCom'
import BannerCom from '../Banner/BannerCom'
import styles from './style'
import Image from '../../assets/Images'
function Empty () {
    return (
        <div  style={styles.mainContainer}>
            
            <Container >
                <Row style={styles.row} >
                    <Col xs={12} md={8} xl={6} style={styles.content}>
                    <BannerCom
                    mainHeading={'Simply and fast website'}
                   
                    bannerDetail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur. Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.'}
                    />
                    <CustomButton
                        text={'Learn More'}
                        style={styles.learnmore}
                    />
                    </Col>
                    <Col xs={12} md={8} xl={6} style={styles.content}>
                        <BannerCom
                        image={Image.Illustration}
                        />
                    </Col>
                
                </Row>
               
            </Container>
        </div>
    )
}

export default Empty 
