import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord, FaLock, FaListAlt, } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleAuthProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary mb-2"><FcGoogle></FcGoogle>  Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube>  YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>  WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord></FaDiscord>  Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLock></FaLock>  Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaListAlt></FaListAlt>  Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
               <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;