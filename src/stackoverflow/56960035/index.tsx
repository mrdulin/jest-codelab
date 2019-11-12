import React from 'react';

export const Avatar = ({ imageSrc, imageAlt, imageWidth, imageHeight }) => (
  <img
    src={imageSrc}
    alt={imageAlt}
    style={{ width: imageWidth, height: imageHeight }}
    onError={e => {
      // @ts-ignore
      e.target.src = '/static/images/placeholder/avatar.png';
    }}
  />
);
