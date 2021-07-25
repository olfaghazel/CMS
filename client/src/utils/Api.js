import axios from 'axios';

const link = 'http://localhost:5000/api'; //current server

const headers = {
  'Content-Type': 'application/json',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
};

export var getApi = async (option) => {
  return await axios
    .get(`${link}/${option}`, {
      headers: headers,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export var postApi = async (option, data) => {
  return await axios
    .post(`${link}/${option}`, data, {
      headers: headers,
    })

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
