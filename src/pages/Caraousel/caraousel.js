import React from 'react';
import {Carousel} from "react-bootstrap";
import styled from 'styled-components'

import Car7 from "../../image/22_ss_eyewear_1.jpg"
import Car from "../../image/22_ss_eyewear_2.jpg"
import Car2 from "../../image/22_ss_eyewear_3.jpg"
import Car3 from "../../image/22_ss_eyewear_4.jpg"
import Car4 from "../../image/22_ss_eyewear_5.jpg"
import Car5 from "../../image/22_ss_eyewear_6.jpg"
import Car6 from "../../image/22_ss_eyewear_7.jpg"
import Car1 from "../../image/22_ss_eyewear_8.jpg"

const Caraousel = () => {
    return (
        <Cars>
            <Carousel className="Carusel">
                <Carousel.Item className="Car">
                    <img
                        className="d-block w-100"
                        src={Car}
                        alt="1-slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Car1}
                        alt="2-slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Car2}
                        alt="3-slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="Car">
                    <img
                        className="d-block w-100"
                        src={Car3}
                        alt="4-slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Car4}
                        alt="5-slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Car5}
                        alt="6-slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="Car">
                    <img
                        className="d-block w-100"
                        src={Car6}
                        alt="7-slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Car7}
                        alt="8-slide"
                    />


                </Carousel.Item>
            </Carousel>
        </Cars>
    );
};
const Cars = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 627px;
  display: flex;
  justify-content: center;
  .Carusel {
    cursor: grab;

    height: 667px;
    float: left;
    list-style: none;
    position: relative;
    width: 70%;
    .Car {
      height: 667px;
      float: left;
      list-style: none;
      img{
        min-width: 450px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`
export default Caraousel;