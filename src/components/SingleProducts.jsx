import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SingleProduct.css"

const SingleProducts = (props) => {
    const { product } = props;

    return (
        <Col md={4} className="mb-4">
            <Card style={{ height: '100%' }}> {/* Ensure all cards have the same height */}
                <Card.Img variant="top" src={product.image} style={{ height: '400px', objectFit: 'cover' }} /> {/* Set fixed height for the image */}
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <b>{product.price}</b> <br />
                        {product.description}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`/${product.id}`}>More info</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleProducts;
