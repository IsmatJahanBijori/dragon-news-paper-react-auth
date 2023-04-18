import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone'
import bg from '../../../assets/bg.png'
// import './RightNav.css'
const RightNav = () => {
    return (
        <div>

            {/**first part */}
            <div className='my-5'>
                <h3 className='font-semibold  mb-3'>Login With</h3>
                <div>
                    <Button variant="outline-primary" className='mb-3' style={{ width: '100%' }}><FaGoogle></FaGoogle> Login With Gmail</Button>
                </div>
                <div>
                    <Button variant="outline-secondary" style={{ width: '100%' }}><FaGithub></FaGithub> Login With Github</Button>
                </div>
            </div>

            {/**second part */}
            <div className='my-5'>
                <h3 className='font-semibold'>Find Us On</h3>
                <ListGroup as="ul">
                    <ListGroup.Item as="li">
                        <FaFacebook className='text-primary' /> facebook
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <FaTwitter className='text-primary' /> twitter
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <FaInstagram className='text-danger' /> instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>

            {/**third part */}
            <div>
                <QZone></QZone>
            </div>

            {/**fourth part */}
            <article
                className='article mt-5 text-white p-5'
                style={{ backgroundImage: `url(${bg})` }}>
                <h2 className='mb-3'>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <div className='text-center'>
                    <Button className='button' variant="danger" style={{ height: '100px', width: '150px' }}>Learn More</Button>
                </div>
            </article>
        </div>
    );
};

export default RightNav;

{/**
<div className='mt-5' style={{width: '600px'}}>
                <img src={bg} alt="" />
            </div> */}