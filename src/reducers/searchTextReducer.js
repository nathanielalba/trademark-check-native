export default (state = '', action) => {
  switch (action.type) {
    case 'set_search_text':
      return action.payload;
    default:
      return state;
  }
};
