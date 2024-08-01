// import { Fragment } from "react"
import React from 'react';
import { Col, Container, Row } from "react-bootstrap"
import HomeBanner from "../components/HomeBanner"
import { useEffect, useState } from "react"

import SingleProducts from '../components/SingleProducts';

function Home(){

//A comonent life cycle events : Mounting    un-mounting updating(function-based component-il manage cheyyan pattilla)class-based : component did mountain,did compemet,will componet(they are default methods)
//react two type components : function-based ...... stateless(state is an object that helps to store information or data within a component for a short period of time),.......and.. .....class-based components......statefull
//Hooks : hooks are functions or methods that helps as to add extra features with in a function based components which is not present by default
 //useEffect (example of hook) first call back-function and second array(Function based-il life cycle events-ne manage cheyyan uise cheyyunnu)
//Hooks-nte sahayathode function-based components-ne statefull aakan pattum.athinu help cheyyunna function aanu useState
    //variable   function
const[products, setProducts] = useState([]); //immutable : update cheyyan pattilla athondannu function use cheyyunnath
//creates new state and update them
//>>>>>Data Fetching>>>>>>>>>>>>
 useEffect(()=>{  //Manege life cycle
fetch('./products.json')
 .then((data) => data.json())  //extaract json data using data.json
 .then((res) => setProducts(res.products));
//.......Mounting.......mount dom-lek kondu varunna timil entekilum karyangal cheyyan illath ivade kodukkam
// return(
    //....Un-mounting......dom-il ninnum componenet remove cheyyan illa task ivade cheyyum
        // ''
    // );
}, []);//......dependancy array..........(rerendder or upadation vannal use cheyyan)variable name array-il koduthal automatically updated aayikollum

console.log("Products------------------>",products);
return(
        <>
        <HomeBanner/>
        <Container>
            <Row>
                <Col className='my-3'>
                <h2>
                    Latest products
                </h2>
                </Col>
            </Row>
           
            <Row>
              {products.map((product) => (
                <SingleProducts product = {product}/>  //props...unidirectional.... parent to child
                ))}
            
            </Row>
        </Container>
        </>
    )
}
export default Home;