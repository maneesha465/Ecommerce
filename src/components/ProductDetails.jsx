import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetails = () => {

const {id} = useParams();
const [products, setProducts] = useState([]); 
const [product, setProduct] = useState(null);
const [productFetched, setProductsFetched] = useState(false);

const getProducts = () => {
    fetch('./products.json')
    .then((data) => data.json())  
    .then((res) => setProducts(res.products));
    setProductsFetched(true);
}
// console.log("id--------->", id);



useEffect(()=>{ 

    console.log("Inside...............");

if(!productFetched){
    getProducts();
}

     if(products.length > 0){
        console.log("products---------->",products);
        const res = products.find((product) => product.id === Number(id));
        setProduct(res);
    }

    }, [id,products,productFetched]);

    

console.log("product---------------->",product);
    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
          {product && (  <Row className = 'my-4'>
                <Col md={4}>
                    <img src = {product.image} alt = {product.name}  className = 'w-100'/>
                </Col>
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>
                               {product.name} 
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>
                                {product.price}
                            </h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <h4>
                                <b>Brand</b>{product.Brand}
                            </h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>
                                {product.category}
                            </h4>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
            )}
        </Container>
    )
}
export default ProductDetails