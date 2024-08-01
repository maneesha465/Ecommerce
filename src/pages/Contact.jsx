import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Contact.css"
function Contact() {

  const [contactFormData, setContactFormData] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  });


  const [errors, setErrors] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  });




const validateForm = () =>{
  let valid = true;

  const newErrors ={
    fullname:'',
    email:'',
    phone:'',
    message:''
  };
  if(!contactFormData.fullname.trim()){
newErrors.fullname = "fullname is required";
valid = false;

  }else if(contactFormData.fullname.length <3){
    newErrors.fullname = "fullname should contain minimum 3 lerrers";
    valid = false;
  }



   if(!contactFormData.email.trim()){
     newErrors.email = "Email is required";
     valid = false;
  }else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
    newErrors.email = "Please enter the valid email";
    valid = false;
  }
     //  }else if(/\S+@/){//regular expressions for pattern
      //   newError.fullname = "email should contain minimum 8 lerrers";
      // }
    
      if (!contactFormData.phone.trim()) {
        newErrors.phone = "Please enter a phone number";
        valid = false;
      } else if (!/^\d{10}$/.test(contactFormData.phone)) {
        newErrors.phone = "Phone number must be 10 digits";
        valid = false;
      }



      if(!contactFormData.message.trim()){
        newErrors.message = "Please enter message";
valid = false;
      }

setErrors(newErrors);
return valid;

}



  const handleSubmit = (e)=>{
  e.preventDefault({});
  if(validateForm()){
    console.log("Form is submitted",contactFormData);
  }
  
}




// const fullnameChangeHandler = (e)=>{
//   console.log("name--------------->",e.target.name);
//   console.log("value-------------->",e.target.value);
//   console.log("change ------------->");
// }
 

const onChangeHandler = (e)=>{
const {name,value} = e.target;
setContactFormData({...contactFormData, [name]:value});
}

console.log("contactformdata--------------------->",contactFormData);

  return (
    <Container>
      <Row className = 'justify-content-center'>
        <Col md={6} >
          <div className='shadow bg-white p-4 m-4'>
            <h1 className='text-center'>CONTACT</h1>
            <form className='form-container my-4' onSubmit={handleSubmit}>
              <input type="text" name='fullname' placeholder='Please enter fullname' onChange={onChangeHandler} />
               {/* nullish polishing  React states 02-04-2024 55:00 */}
              <span className='error'>{errors?.fullname ?? ''}</span>
              {/* regular expressions.../0-9 /[a-z]/[A-Z]/[A-Za-z]*/}
              <input type="email" name='email' placeholder='Please enter email'  onChange={onChangeHandler}/>
              <span className='error'>{errors?.email ?? ''}</span>
              <input type="number" name='phone' placeholder='Please enter phone number' onChange={onChangeHandler} />
              <span className='error'>{errors?.phone ?? ''}</span>
              <textarea type="text" name="message" rows={5} placeholder='Please enter message' onChange={onChangeHandler}></textarea>
              <span className='error'>{errors?.message ?? ''}</span>
              <button className='mt-5 mb-5'>Send Message</button>
            </form>

          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Contact