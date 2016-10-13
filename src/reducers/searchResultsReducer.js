const defaultState = {
  data: [],
  isLoading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'get_search_results':
      return {
        data: [],
        isLoading: true
      };
    case 'set_search_results':
      return {
        data: [...action.payload],
        isLoading: false
      };
    default:
      return state;
  }
};
