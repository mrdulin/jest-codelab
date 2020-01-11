import React from 'react';

export const StoryCardList = () => {
  const handleScroll = (e) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    const rightEnd = scrollWidth - scrollLeft === clientWidth;

    if (rightEnd) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return (
    <div className="story-card-list" onScroll={(e) => handleScroll(e)}>
      story card list
    </div>
  );
};
