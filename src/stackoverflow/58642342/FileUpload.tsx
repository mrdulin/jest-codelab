import React from 'react';
import { Theme, withStyles, createStyles } from '@material-ui/core';

interface IFileUploadProps {}
interface IFileUploadState {}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      width: '100%',
      backgroundColor: 'inherit'
    },
    input: {
      display: 'none'
    },
    padding24: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  });
};

class FileUpload extends React.Component<IFileUploadProps, IFileUploadState> {
  validateImage() {
    console.log('validate image');
  }

  render() {
    return <div>file upload</div>;
  }
}

export default withStyles(styles)(FileUpload);
