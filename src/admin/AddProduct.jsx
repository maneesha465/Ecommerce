import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container} from 'react-bootstrap';


function AddProduct() {
    const [validated, setValidated] = useState(false);


    const [product, setProduct] = useState({
        productName:'',
        caterory:'',
        price:'',
        photo:''
      });
    
const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
         event.stopPropagation();
         setValidated(true);
        }else{
            console.log("form submitted",product);
            setValidated(true);
        }
    };

 const onChangeHandler = (e)=>{
        const {name,value} = e.target;
        if(name === 'photo'){
            const photo = e.target.files[0];
            setProduct({...product, [name]:photo});
        }else{
            setProduct({...product, [name]:value});
        }
       
        }



  return (
    <Container className='pb-4  '>
        <Row  className="justify-content-center">
            <Col md="auto">
            <h2 className='text-center pt-5 pb-5'>
                Add Products
            </h2>
            </Col>
        </Row>
         
<Row className='justify-content-center'>

            <Col md={4} className='mb-4 shadow p-4 pt-5 pb-5' >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  controlId="validationCustom01" className='position-relative'>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Name"
           name='productName'
           onCanPlay={onChangeHandler}
          />
           <Form.Control.Feedback type='invalid' tooltip>
            please enter product name
           </Form.Control.Feedback>
           <Form.Control.Feedback tooltip>
            Looks Good!
           </Form.Control.Feedback>
        </Form.Group>
        </Row>
          <Row>
          <Form.Group controlId="validationCustom02">
          <Form.Label>Category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Category"
           name='category'
           onChange={onChangeHandler}
          />
          <Form.Control.Feedback type = 'invalid'>
            Please enter product category
          </Form.Control.Feedback>
        </Form.Group>
          </Row> 

         <Row>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Price:</Form.Label>
          
            <Form.Control
              type="text"
              placeholder="Price"
              aria-describedby="inputGroupPrepend"
              required
              name='price'
              onChange={onChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a product price.
            </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" name='photo' onChange={onChangeHandler} required />
           
            <Form.Control.Feedback type="invalid" >
              Please choose a photo.
            </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className='mt-2'>Add Product</Button>
      </Row>
      </Form>
            </Col>
        </Row> 


    </Container>
  )
}

export default AddProduct