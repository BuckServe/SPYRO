import React from 'react';
import { Link } from 'react-router-dom';

// Slanted orange button. Renders a router Link when `to` is given, so it is
// never a <button> nested inside an <a> (invalid HTML the old version produced).
const OneSideCurveButton = ({ text, p_x = '1.5rem', p_y = '10px', to, type = 'button', onClick, className = '', ...rest }) => {
  const classes = `btn-shine relative inline-block -skew-x-12 bg-orangeL font-Outfit text-18px font-medium text-slate-100 no-underline transition-colors duration-200 hover:bg-white hover:text-orangeL ${className}`;
  const style = { paddingLeft: p_x, paddingRight: p_x, paddingTop: p_y, paddingBottom: p_y };

  if (to) {
    return (
      <Link to={to} className={classes} style={style} onClick={onClick} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} style={style} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default OneSideCurveButton;
