import types from '../types';

const init_state = {
  todo: [],
};

export default function (state = init_state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
