import React, { useState, useEffect } from "react";
import { getLaunchBySlug } from "../../api/spaceApi.js";
import { Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LaunchDetail.css";

const LaunchDetail = (props) => {
  const [launch, setLaunch] = useState({
    links: {flickr: {original: []}}
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path '/launch/:slug'
    if (slug) {
      getLaunchBySlug(slug).then((_launch) => setLaunch(_launch));
    }
  }, [props.match.params.slug, launch.rocket]);

  return (
    <>
      <h1>Launch: {launch.name}</h1>
      <Container fluid>
        <Row>
          <h2>Details: </h2>
          <p> { launch.details }</p>
        </Row>
        <Row>
          <h2>Flight Number: </h2>
          <><p> { launch.flight_number } </p></>
        </Row>
        <Row>
          <h2>Rocket: </h2>
        </Row>
        <Row>
          <Link to={"/rocket/" + launch.rocket}>{launch.rocket_name}</Link>
        </Row>
        <Row>
          <Carousel>
            { launch.links.flickr.original.map((image,i) => {
            return(
              <Carousel.Item key = {launch.id + i}>
                <img
                  className="img-fluid"
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

export default LaunchDetail;
