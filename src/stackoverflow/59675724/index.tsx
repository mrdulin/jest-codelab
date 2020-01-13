import React, { useState } from 'react';

export const StoryCardList = () => {
  const [animate, setAnimation] = useState(false);

  const handleScroll = (e) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    const rightEnd = scrollWidth - scrollLeft === clientWidth;

    if (rightEnd) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };

  return (
    <div className="story-card-list" onScroll={(e) => handleScroll(e)}>
      story card list, animate: {animate ? 'animation enabled' : 'animation disabled'}
    </div>
  );
};
