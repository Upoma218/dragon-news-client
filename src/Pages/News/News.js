import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';


const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, rating, author, total_view } = news;
    return (
        <Card className='my-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex '>
                    <Image roundedCircle src={author?.img} style={{ height: "50px" }}></Image>
                    <div className='ms-2'>
                        <h6 >{author?.name}</h6>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Title className="text-center m-3">{title}</Card.Title>
            <Card.Img variant="top" className='px-3' src={image_url} />
            <Card.Body>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between">
                <div className=" d-flex  align-items-center">
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span></div>
                <div className=" d-flex align-items-center"><FaEye className='me-2'></FaEye>
                    <span>{total_view}</span></div>
            </Card.Footer>
        </Card>
    );
};

export default News;