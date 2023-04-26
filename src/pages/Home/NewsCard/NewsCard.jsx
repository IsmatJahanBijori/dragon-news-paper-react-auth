import React from 'react';
import { Image } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { FaShareAlt, FaRegBookmark, FaEye, FaStar, FaRegStar } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className='mb-4 text-start'>
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author && author.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <h5>{author && author.name}</h5>
                        <p>{moment(author.published_date).format('yyyy-DD-MM')}</p>
                    </div>
                <div>
                    <FaRegBookmark style={{ height: '40px' }} className='me-3'></FaRegBookmark>
                    <FaShareAlt style={{ height: '40px' }}></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='mt-4'>
                    {details.length < 250 ? <p>{details}</p> : <p>{details.slice(0, 250)}... <Link to={`/news/${_id}`} style={{ color: 'blue', textDecoration: 'none' }}>Read More</Link></p>}
                </Card.Text>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                    <Rating style={{color: 'brown'}}
                    readonly
                    placeholderRating={rating.number}
                    emptySymbol={<FaRegStar/>}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}</div>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;