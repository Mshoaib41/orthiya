import React from 'react'
import Image from '../../assets/Images'
import { NavDropdown, Nav, Container, Navbar } from 'react-bootstrap'
import CustomButton from '../ButtonCom'
import style from './style';

function Header() {
    return (
        <div style={style.maincontainer} >
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container >
                    <Navbar.Brand href="#home">
                        <img src={Image.logo} alt='logo' style={style.logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            
                        <Nav.Link href="#email" className='mx-2' style={style.navbartitletext} >Hosting <i className="fas fa-chevron-down mx-2"></i> </Nav.Link>
                            <Nav.Link href="#websitebulder" className='mx-2' style={style.navbartitletext} >Domain <i className="fas fa-chevron-down mx-2" ></i></Nav.Link>
                            <Nav.Link href="#email" className='mx-2' style={style.navbartitletext} >Email</Nav.Link>
                            <Nav.Link href="#websitebulder" className='mx-2' style={style.navbartitletext} >Website Builder</Nav.Link>
                            <Nav.Link href="#pricing" className='mx-1' style={style.navbartitletext}>Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <CustomButton
                                    style={style.loginButton}
                                    text={'Login'}
                                    
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header
