import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg bg-light p-4 border-0">
            <Card.Body>
              <Card.Title className="text-center mb-4 text-primary">About Us</Card.Title>
              <Card.Text>
                Welcome to our Electronics Store! We are dedicated to providing you with the best-in-class electronics and customer service.
                Our store offers a wide range of products from the latest smartphones to high-performance laptops, and top-notch home appliances.
              </Card.Text>
              <Card.Text>
                Our mission is to make technology accessible and affordable for everyone. We strive to bring you the latest and most reliable products from the best brands in the industry.
                Our team of experts is always here to help you make informed decisions and find the perfect products to meet your needs.
              </Card.Text>
              <Card.Text>
                Thank you for choosing us as your trusted electronics provider. We look forward to serving you and helping you stay connected in today’s fast-paced digital world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-sm bg-info text-white p-3 border-0">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be a leading provider of innovative electronics solutions, enriching the lives of our customers worldwide.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm bg-success text-white p-3 border-0">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To deliver high-quality, reliable, and affordable electronics products while ensuring exceptional customer service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm bg-warning text-dark p-3 border-0">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, Innovation, Customer Focus, Excellence, Good customer services, and better Teamwork.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Members Section */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light p-4 border-0">
            <Card.Title className="text-center mb-4 text-primary">Meet Our Team</Card.Title>
            <Row>
              <Col md={3} className="text-center">
                <Card className="shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>CEO</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="text-center">
                <Card className="shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>Jane Smith</Card.Title>
                    <Card.Text>CTO</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="text-center">
                <Card className="shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>Bob Johnson</Card.Title>
                    <Card.Text>Head of Sales</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="text-center">
                <Card className="shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>Alice Brown</Card.Title>
                    <Card.Text>Customer Support</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* History Section */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light p-4 border-0">
            <Card.Title className="text-center mb-4 text-primary">Our History</Card.Title>
            <Card.Text>
              Founded in 2010, our Electronics Store has been a pioneer in the industry, bringing innovative technology and exceptional customer service to our community.
              Over the years, we have expanded our product offerings and built a loyal customer base. Our commitment to quality and reliability has made us a trusted name in electronics.
            </Card.Text>
          </Card>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light p-4 border-0">
            <Card.Title className="text-center mb-4 text-primary">Customer Testimonials</Card.Title>
            <Card.Text>
              "I had a great experience shopping here! The staff was very helpful and I found exactly what I needed." - Sarah L.
            </Card.Text>
            <Card.Text>
              "Amazing selection of products and excellent customer service. Highly recommend!" - Mark T.
            </Card.Text>
            <Card.Text>
              "I love my new laptop! The team helped me choose the perfect one for my needs." - Emily R.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
