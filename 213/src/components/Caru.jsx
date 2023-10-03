import React from "react";
import { Carousel } from "react-bootstrap";
import Pic from "../assers/images.jpg";
import Pic2 from "../assers/the-pros-and-cons-of-paper-to-do-lists.jpeg";
import Pic3 from "../assers/to-do-list-artinya.jpg";

const Caru = () => {
  return (
    <Carousel className="Caruu d-flex flex-row justify-content-center align-items-center">
      <Carousel.Item>
        <div className="d-flex flex-row justify-content-center">
          <img src={Pic} />
        </div>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-row justify-content-center">
          <img src={Pic2} />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-row justify-content-center">
          <img src={Pic3} alt="" />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caru;
