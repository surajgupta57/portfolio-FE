

import "./Testimonial.css";
import { useGetTestimonialsQuery } from "../../Api/api";
import { useEffect, useState, useRef} from "react";
// import config from '../config.js';
import { Carousel } from 'react-bootstrap';
const Testimonial = () => {
  const { data: testimonials, isFetching } = useGetTestimonialsQuery();
  const [chunks, setChunks] = useState([]);
  const itemRef = useRef(null);
  const BASEURL = "http://api.inavihs.tech"
  useEffect(() => {
    if (testimonials) {
      const testimonialChunks = testimonials.reduce((acc, curr, index) => {
        if (index % 3 === 0) {
          acc.push(testimonials.slice(index, index + 3));
        }
        return acc;
      }, []);
      setChunks(testimonialChunks);
    }
  }, [testimonials]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const maxHeight = Math.max(...entries.map((entry) => entry.contentRect.height));
      itemRef.current.style.height = `${maxHeight}px`;
    });

    if (itemRef.current) {
      resizeObserver.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        resizeObserver.unobserve(itemRef.current);
      }
    };
  }, []);

  if (isFetching) return "loading";
  if (!chunks.length) return null;

  return (
    <>
     <section id="recommendation">
    <div className="testimonial-section">
     {/* <h3 className="testimonial-header">What Clients Say</h3> */}
     <div className="testimonial-title">
        <h2>Recommendations</h2>
        <h3>What People Say</h3>
      </div>
    <div className="row">
      <Carousel interval={5000} pause={false} ride="carousel" controls={false}>
        {chunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div className="row">
              {chunk.map((testimonial) => (
                <div className="col-lg-4 col-md-4 col-sm-4" key={testimonial.id} ref={itemRef}>
                  <div className="feedback-slider-item">
                    <img
                      src={`${BASEURL}${testimonial.photo}`}
                      className="img-circle"
                      alt="Customer Feedback"
                    />
                    <h3 className="customer-name">{testimonial.name}</h3>
                    <p>{testimonial.content}</p>
                    {/* <span className="light-bg customer-rating" data-rating="5">
                      {testimonial.ratings}
                      <i className="fa fa-star"></i>
                    </span> */}
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
    </section>
    </>
  );
};

export default Testimonial;
