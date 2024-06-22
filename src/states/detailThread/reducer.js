const initState = {
  thread: {},
  created: false,
};

const detailThreadReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_THREAD':
      return {
        ...state,
        thread: action.payload,
        created: false,
      };
    case 'COMMENT_CREATED':
      return {
        ...state,
        created: true,
      };
    default:
      return state;
  }
};

export default detailThreadReducer;
