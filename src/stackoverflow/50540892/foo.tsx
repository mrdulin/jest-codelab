import React from 'react';

function Foo({ data }) {
  if (data === true) {
    return (
      <div className="hello" id="helloId">
        Hello
      </div>
    );
  } else {
    return (
      <div className="hi" id="hiId">
        Hi
      </div>
    );
  }
}

export { Foo };
