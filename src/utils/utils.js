import axios from 'axios';

function apiRequest(url, method, params) {
  return params
    ? axios({
        url: url,
        method: method,
        data: params,
      })
    : axios({
        url: url,
        method: method,
        data: {},
      });
}

export function getAllData() {
  return apiRequest('https://mytodobackend2.herokuapp.com/todo', 'get', {});
}

export function deleteData(id) {
  return apiRequest(
    `https://mytodobackend2.herokuapp.com/todo/${id}`,
    'delete',
    {},
  );
}

export function postData(title, description) {
  return apiRequest('https://mytodobackend2.herokuapp.com/todo', 'post', {
    title,
    description,
  });
}

export function patchData(id, title, description) {
  return apiRequest(
    `https://mytodobackend2.herokuapp.com/todo/${id}`,
    'patch',
    {
      title,
      description,
    },
  );
}
