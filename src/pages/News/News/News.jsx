import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsights from '../EditorsInsights/EditorsInsights';
const News = () => {
    const news = useLoaderData()
    return (
        <div>
            <h4>Dragon News</h4>
            <Card className='text-start'>
                <Card.Img variant="top" src={news.image_url} />
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.details}
                    </Card.Text>
                    <Link to={`/category/${news.category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All News In This Category</Button></Link>
                </Card.Body>
            </Card>

            <div>
                <EditorsInsights></EditorsInsights>
            </div>
        </div>
    );

};

export default News;