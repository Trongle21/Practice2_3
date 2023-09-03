import { Accordion } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


/**
 * @typedef PracticeAccordionProps
 * 
 * @property {array} slides
 */

/**
 * 
 * @param {PracticeAccordionProps} props 
 * @returns 
 */

const PracticeAccordion = ({ slides }) => {
  return (
    <Accordion defaultActiveKey="0">
      {slides.map((slide,index) => (
        <Accordion.Item eventKey={index} key ={index}>
          <Accordion.Header>{slide.title}</Accordion.Header>
          <Accordion.Body>
            {slide.subTitle}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

PracticeAccordion.propTypes = {
   slides: propTypes.array 
};

export default PracticeAccordion;
