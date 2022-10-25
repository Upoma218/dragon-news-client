import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-primary fw-bold fs-3 text-decoration-none mx-3 mt-2'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className='text-black text-decoration-none mx-3' >All News</Link>
                          
                        </Nav>
                        <Nav>

                            <Link to="/profile" className='mt-3 me-2'>
                                {user?.photoURL ? <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>}
                            </Link>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='me-3 mt-3'>{user?.displayName}</span>
                                            <Button className='mx-3 mt-2' variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='text-black text-decoration-none mx-3' >Login</Link>
                                            <Link to='/register' className='text-black text-decoration-none mx-3' >Register</Link>

                                        </>
                                }


                            </>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;