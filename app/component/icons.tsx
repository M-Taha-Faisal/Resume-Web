import React from 'react';
import gmail from '/public/gmail.svg'

export default function  MyIcon() {
  return (
    <svg
    width='50'
    height='50'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d={gmail}
      fill='#652CD3'
    />
  </svg>
  );
}

