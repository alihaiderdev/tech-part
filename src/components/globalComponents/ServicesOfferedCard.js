import React, { useState } from 'react';
import '../../styles/components/globalComponents/servicesOfferedCard.scss';

import { BsArrowRight } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const ServicesOfferedCard = ({ image, title, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`${url && url}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        transform: `${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
        transition: 'all 0.8s ease-in-out',
        width: '100%',
      }}
      className='servicesOfferedCard'
    >
      <div className='strip' />
      <div className='center'>
        <img src={image && image} alt='service-card' />
        <p className='title mt-3'>
          <span className='mr-1 black'>{title && title}</span>
          <BsArrowRight className='blue' size='25' />
        </p>
      </div>
    </Link>
  );
};

export default ServicesOfferedCard;
