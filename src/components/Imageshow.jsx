import React from "react";

function Imageshow({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className='row g-0' key={index}>
          {index % 2 === 0 ? (
            <>
              <div
                className='col-lg-6 order-lg-2 order-sm-1 text-white showcase-img'
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              ></div>
              <div className='col-lg-6 order-lg-1 order-sm-2 my-auto showcase-text'>
                <h2>{item.des1}</h2>
                <p className='lead mb-0'>{item.des2}</p>
              </div>
            </>
          ) : (
            <>
              <div className='col-lg-6 order-lg-2 order-sm-2 my-auto showcase-text'>
                <h2>{item.des1}</h2>
                <p className='lead mb-0'>{item.des2}</p>
              </div>
              <div
                className='col-lg-6 order-lg-1 order-sm-1 text-white showcase-img'
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              ></div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Imageshow;
