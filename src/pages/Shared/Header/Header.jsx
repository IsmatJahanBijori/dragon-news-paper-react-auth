import React from 'react';
import './Header.css'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
// import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    
    return (
        <Container>
            <div className='text-center'>
                <h1 className='title'>The Dragon NewsPaper</h1>
                <p className='subtitle'>Journalism Without Fear or Favour</p>
                <p className='date'>{moment().format("dddd, MMMM D, YYYY")} </p>
            </div>
            <div className='d-flex mb-4' style={{ padding: '10px', borderRadius: '10px', display: 'inline', backgroundColor: ' #F3F3F3' }}>
                <Button className='button' variant="danger" style={{ height: '70px', width: '90px' }}>Latest</Button>
                <Marquee speed={50}>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis vitae incidunt odit debitis ratione quidem corrupti, necessitatibus voluptatibus cum.Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;