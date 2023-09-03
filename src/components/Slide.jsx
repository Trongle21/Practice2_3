import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import Proptype from "prop-types";

/**
 * @typedef SlideProps
 *
 * @property {Array} slides
 */

/**
 *
 * @param {SlideProps} props
 * @returns
 */

function Slide({ slides }) {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage
            src={slide.image}
            className="d-block w-100"
            alt="slide-1"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

Slide.propTypes = {
  slides: Proptype.array,
};

export default Slide;
