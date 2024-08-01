import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleProducts from './SingleProducts';

const LatestProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((data) => data.json())
            .then((res) => setProducts(res.products));
    }, []);

    return (
        <>
            <Row>
                <Col className='my-3'>
                    <h2>Latest Products</h2>
                </Col>
            </Row>
            <Row>
                {products && products.map((product, index) => (
                    <SingleProducts key={index} product={product} />
                ))}
            </Row>
        </>
    );
}

export default LatestProducts;
