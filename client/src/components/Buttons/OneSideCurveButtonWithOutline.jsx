import React from 'react';
import { Link } from 'react-router-dom';

const OneSideCurveButtonWithOutline = ({ text, to = '/contact_us', className = '' }) => (
  <Link
    to={to}
    className={`relative inline-block -skew-x-12 border-2 border-white bg-transparent px-2 py-1 font-Outfit text-18px font-medium text-white no-underline transition-colors duration-200 hover:bg-white hover:text-orangeL ${className}`}
  >
    {text}
  </Link>
);

export default OneSideCurveButtonWithOutline;
