import React from "react";

function Iconsgrid({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className='col-lg-4' key={index}>
          <div className='features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3'>
            <div className='features-icons-icon d-flex'>
              <i className={`${item.icon} m-auto text-primary`}></i>
            </div>
            <h3>{item.des1}</h3>
            <p className='lead mb-0'>{item.des2}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Iconsgrid;
