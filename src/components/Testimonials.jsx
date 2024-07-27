import React from "react";

function Testimonials({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div class='col-lg-4' key={index}>
          <div class='testimonial-item mx-auto mb-5 mb-lg-0'>
            <img
              class='img-fluid rounded-circle mb-3'
              src={`${item.img}`}
              alt='...'
            />
            <h5>{item.name}</h5>
            <p class='font-weight-light mb-0'>{item.review}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Testimonials;
