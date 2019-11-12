import React from 'react';

const styles = {
  sendEmail: 'sendEmail'
};

export const SendProjectManagerEmail = ({ sendEmail }) => {
  return (
    <button id="send-project-manager-email-button" className={styles.sendEmail} onClick={() => sendEmail()}>
      Resend Email
    </button>
  );
};
