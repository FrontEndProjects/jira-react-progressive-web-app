export const ADD_TASK = 'ADD_TASK';

export function addTask (text) {
  return { type: ADD_TASK, text };
}
