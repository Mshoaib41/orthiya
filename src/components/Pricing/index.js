import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './style'
import CustomButton from '../ButtonCom'
import PricingCom from './PricingCom'
import Color from '../../util/color'

function Pricing() {
    return (
        <div>
            <Container fluid style={styles.mainContainer}>
                <Row >
                    <p style={styles.textmain}>Choose Your Hosting Package</p>
                    <p style={styles.textdetail}>Enter your select domain name and choose any extension name in the next step
                        <br />
                        (choose between .com, .online, .tech, .site, .net, and more)</p>
                </Row>
                <Container>
                    <Row >
                    <Row style={styles.row}>
                        <CustomButton
                        text={'Most Popular'}
                        style={styles.buttonMostPopular}
                    />
                    </Row>
                        <Col xs={12} md={6} xl={4} className='border border-info rounded-3' >
                            <PricingCom
                                title={'Shared Hosting'}
                                price={'$3.99'}
                                li={[{ icon: 'fas fa-check', textdetail: '1 Website' },
                                { icon: 'fas fa-check', textdetail: '30 GB SSD Storage' },
                                { icon: 'fas fa-times', textdetail: 'Free SSL' },
                                { icon: 'fas fa-times', textdetail: 'Free Domain' },
                                { icon: 'fas fa-times', textdetail: 'Google Ads' },
                                { icon: 'fas fa-check', textdetail: 'Managed WordPress' },
                                { icon: 'fas fa-check', textdetail: '30 Days Money Back Guarantee ' },
                                { icon: 'fas fa-check', textdetail: '1 Email Account' }
                                ]}
                                buttonColor={'red'}
                            />
                        </Col>
                        <Col xs={12} md={6} xl={4} >
                     
                            <PricingCom
                                title={'Premium Hosting'}
                                price={'$6.99'}
                                li={[,
                                    { icon: 'fas fa-check', textdetail: '10 Website' },
                                    { icon: 'fas fa-check', textdetail: '100 GB SSD Storage' },
                                    { icon: 'fas fa-check', textdetail: 'Free SSL' },
                                    { icon: 'fas fa-times', textdetail: 'Free Domain' },
                                    { icon: 'fas fa-times', textdetail: 'Google Ads' },
                                    { icon: 'fas fa-check', textdetail: 'Managed WordPress' },
                                    { icon: 'fas fa-check', textdetail: '30 Days Money Back Guarantee' },
                                    { icon: 'fas fa-check', textdetail: '5 Email Account' }
                                ]}
                            />
                        </Col>
                        <Col xs={12} md={6} xl={4} className='border border-info rounded-3'>
                            <PricingCom
                                title={'Premium Hosting'}
                                price={'$9.99'}
                                li={[{ icon: 'fas fa-check', textdetail: '30 Website' },
                                { icon: 'fas fa-check', textdetail: '500 GB SSD Storage' },
                                { icon: 'fas fa-check', textdetail: 'Free SSL' },
                                { icon: 'fas fa-check', textdetail: 'Free Domain' },
                                { icon: 'fas fa-check', textdetail: 'Google Ads' },
                                { icon: 'fas fa-check', textdetail: 'Managed WordPress' },
                                { icon: 'fas fa-check', textdetail: '30 Days Money Back Guarantee ' },
                                { icon: 'fas fa-check', textdetail: '10 Email Account' }
                                ]}
                            />
                        </Col>
                            
                    </Row>

                </Container>
                <Row style={styles.spacingRow}></Row>
            </Container>
        </div>
    )
}

export default Pricing
