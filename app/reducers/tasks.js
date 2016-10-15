export default function tasks (state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return state.concat([ action.text ]);
    default:
      return state;
  }
}
