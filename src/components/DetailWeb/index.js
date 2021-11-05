import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import BannerCom from '../Banner/BannerCom'
import Image from '../../assets/Images'
import CustomButton from '../ButtonCom'
import styles from './style'
function DetailWeb() {
    return (
        <div>
            <Container className="mb-5">
                <Row>
                    <Col xs={12} md={6} style={styles.detailWebMain} >
                    <BannerCom
                mainHeading={'Extra Website Security'}
                bannerDetail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur. Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.'}
            />
            <CustomButton
                text={'Learn More'}
                style={styles.learnmore}
            />
                    </Col>
                    <Col xs={12} md={6} className="mb-5">
                        <BannerCom
                        image={Image.Illustration}
                        />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default DetailWeb

