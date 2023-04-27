import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { Button, Nav, Navbar } from 'react-bootstrap';
const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto mt-16">
                            <Link to='/' style={{ textDecoration: 'none', color: 'black', marginRight:'5px' }}>Home</Link>
                            <Link to='' style={{ textDecoration: 'none', color: 'black', marginRight:'5px' }}>About</Link>
                            <Link to='' style={{ textDecoration: 'none', color: 'black', marginRight:'5px' }}>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-center'>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }} />
                            }

                            {
                                user ? <Button variant="secondary" style={{ textDecoration: 'none' }}>Logout</Button>
                                    :
                                    <div>
                                    <Link to='/login'><Button variant="secondary" style={{ textDecoration: 'none', marginRight: '10px' }}>Login</Button></Link>
                                    <Link to='/register'><Button variant="danger" style={{ textDecoration: 'none' }}>Register</Button></Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;