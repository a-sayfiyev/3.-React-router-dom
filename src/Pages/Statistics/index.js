import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CarouselImgFirst from "../../Assets/firstcarousel.jpg";
import CarouselImgSecond from "../../Assets/carouselimg2.jpg";
import CarouselImgThird from "../../Assets/carouselimg3.jpg";

export default function Statistics() {
  return (
    <>
      <div className="container p-4">
        <h1>Statistika</h1>
        <p>Statistikalarni ko'rish</p>

        <Carousel style={{ width: "750px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImgFirst}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImgSecond}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImgThird}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
