import React, { useState, useEffect } from "react";
import { getRocketBySlug } from "../../api/spaceApi.js";
import { Container, Row, Carousel } from "react-bootstrap";
import "./RocketDetail.css"


const RocketDetail = (props) => {
  const [rocket, setRocket] = useState({
    flickr_images:[]
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path '/rocket/:slug'
    if (slug) {
      getRocketBySlug(slug).then((_rocket) => setRocket(_rocket));
    }
  }, [props.match.params.slug]);

  return (
    <>
      <h1>Rocket: {rocket.name}</h1>
      <Container fluid>
        <Row>
          <h2>Details: </h2> 
          <br />
          <p> { rocket.description }</p>
        </Row>
        <Row>
          <h2>First Flight: </h2>
          
          
        </Row>
        <Row>
          { rocket.first_flight } 
        </Row>
        
        <Row>
          <Carousel>
            { rocket.flickr_images.map((image,i) => {
            return(
              <Carousel.Item key = {rocket.id + i}>
                <img
                  className="img-fluid rocket-image"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            );
            })}
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default RocketDetail;
