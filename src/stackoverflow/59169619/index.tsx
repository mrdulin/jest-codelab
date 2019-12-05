import React, { useState, useEffect } from "react";

const App = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const newLinks = createLinks();
    // @ts-ignore
    setLinks(newLinks);
  }, []);

  const createLinks = () => {
    return [{ link: "https://www.google.com", text: "Google" }];
  };

  return (
    <>
      {links.length &&
        links.map(({ link, text }, idx) => (
          <a key={idx} href={link}>
            {text}
          </a>
        ))}
    </>
  );
};

export default App;
