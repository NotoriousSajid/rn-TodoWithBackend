import {deleteData, getAllData, patchData, postData} from '../../utils/utils';

export const allTodo = () => {
  return getAllData();
};

export const deleteTodo = id => {
  return deleteData(id);
};

export const postTodo = (title, description) => {
  return postData(title, description);
};

export const patchTodo = (id, title, description) => {
  return patchData(id, title, description);
};
