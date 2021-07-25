import React from 'react';

import { deleteAlert } from '../utils/Alert';

const Alert = ({ alerts }) => {
  console.log('olfaa', alerts);
  return alerts.map((alert) => {
    console.log('abcd', alert);
    return (
      <div
        key={alert.id}
        role='alert'
        className={`alert alert-${alert.alertType}`}
      >
        <span>{alert.msg}</span>
        <button
          type='button'
          class='close'
          data-dismiss='alert'
          aria-hidden='true'
          onClick={() => deleteAlert({ id: alert.id })}
        >
          ×
        </button>
      </div>
    );
  });
};

export default Alert;
