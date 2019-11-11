import React, { useState } from 'react';

export const Upload = props => {
  const [fileName, setFileName] = useState('no file chosen');
  function handleFile(e) {
    const [sFile] = e.target.files;
    setFileName(sFile.name);
  }

  return (
    <React.Fragment>
      <label>
        <input id="file-upload" type="file" accept=".pdf, application/pdf" onChange={handleFile} />
        choose_file
      </label>
      <label className="file-text">{fileName}</label>
    </React.Fragment>
  );
};
