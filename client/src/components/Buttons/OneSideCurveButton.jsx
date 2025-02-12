import React from 'react';

const OneSideCurveButton = ({ text, p_x, p_y }) => {
  return (
    <button
      className="relative inline-block text-slate-100 bg-orangeL transform -skew-x-12 hover:bg-white hover:text-orangeL font-Outfit font-medium text-18px"
      style={{
        paddingLeft: `${p_x}`,
        paddingRight: `${p_x}`,
        paddingTop: `${p_y}`,
        paddingBottom: `${p_y}`,
      }}
    >
      {text}
    </button>
  );
};

export default OneSideCurveButton;
