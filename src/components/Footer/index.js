import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from './style'
import Image from '../../assets/Images'
import LiComponent from './LiComponent'

function FooterCom() {
    return (
        <div>
            
            <Container fluid style={styles.footerMain} className="p-5">
              <Row d-flex>
                  <Col md={4} className="p-5 " style={styles.footerIconSide}>
                    <img src={Image.IconFooter} style={styles.iconImageFooter} alt="iconFooter" />
                    <p style={styles.footerDetailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus venenatis, lectus
                     magna fringilla urna, porttitor rhoncus
                      dolor purus non enim praesent elem</p>   

                          
                  </Col>
                  <Col md={8}>
                  <Row>
                      <Col xs={6} md={3} className='p-3 mt-4'>
                      <LiComponent
                      headingMain={'Service'}
                      text ={ ["Domain",'Shared Hosting','Cloud Hosting','Private Hosting','Sports']}
                      />
                      </Col>
                      <Col xs={6} md={3} className='p-3 mt-4'>
                        
                        <LiComponent
                         headingMain={'Hosting'}
                      text ={ ["Cheap Hosting",'Hosting Wordpress','Email Hosting','Hosting Unlimited']}            
                        />
                      </Col>
                      <Col xs={6} md={3} className='p-3 mt-4'>
                      <LiComponent
                       headingMain={'Company'}
                      text ={ ["About",'Career','Contact Us',]}   
                          />
                      </Col>
                      <Col xs={6} md={3} className='p-3 mt-4'>
                      <LiComponent
                         headingMain={'About'}
                      text ={ ["Help",'FAQ','Help Support']} 
                        />
                      </Col>
                  </Row>
                  </Col>
                
              </Row>
              <p style={styles.madeby}>Made Remotely By TanahAir Studio. Copyright 2020</p> 
            </Container>
        </div>
    )
}

export default FooterCom
