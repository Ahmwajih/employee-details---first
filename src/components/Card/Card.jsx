import React from 'react';

const Card = props => {
  const { name, age, image, email } = props;
  return (
    <div className="col-md-6 col-lg-5 item">
      <div className="box">
        <img className="rounded-circle" src={image} alt={name} />
        <h3 className="name">{name}</h3>
        <p className="title">{email}</p>
        <p className="description">{age}</p>
        <div className="social">
          <p>
            <i className="fa-brands fa-facebook"></i>
          </p>
          <p>
            <i className="fa-brands fa-twitter"></i>
          </p>
          <p>
            <i className="fa-brands fa-instagram"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
