import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const OrganizationDocs = (props) => {
  const [orgTitle, setOrgTitle] = useState('');

  useEffect(() => {
    getAdminOrg();
  }, []);

  const getAdminOrg = () => {
    const token = localStorage.getItem('token');
    const URL = `organizations/organizations/`;
    let config = {
      headers: { Authorization: 'JWT ' + token },
    };
    axios
      .get(URL, config)
      .then((response) => {
        setOrgTitle(response.data.name);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          if (error.response.status === 401) {
            props.renewToken();
          }
        }
      });
  };

  return <div className="org-docs-header">orgTitle: {orgTitle}</div>;
};
