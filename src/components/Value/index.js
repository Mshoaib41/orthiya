import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import ValueCom from './ValueCom'

function MainValue() {
    return (
        <div>
           <Container fluid className='mt-5'>
                <Row>
                    <Col xs={12} md={6} xl={4} className='mt-4'>
                    <ValueCom
                    
                    text={'Unlimited Hosting'}
                    />
                    </Col>
                    <Col xs={12}  md={6} xl={4}  className='mt-4'>
                    <ValueCom
                         text={'Shared Hosting'}
                    /> 
                    </Col>
                    <Col xs={12}  md={6} xl={4}  className='mt-4'>
                    <ValueCom 
                     text={'WordPress Hosting'}
                    />
                    </Col>
                </Row>
           </Container>
       
        </div>
    )
}

export default MainValue

