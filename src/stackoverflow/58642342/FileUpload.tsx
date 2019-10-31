import React from 'react';

interface IFileUploadProps {}
interface IFileUploadState {}

export class FileUpload extends React.Component<IFileUploadProps, IFileUploadState> {
  validateImage() {
    console.log('validate image');
  }

  render() {
    return <div>file upload</div>;
  }
}
