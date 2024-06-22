const initState = {
  threads: [],
  users: [],
  created: false,
};

const threadsAndUsersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_THREADS_AND_USERS':
      return {
        ...state,
        threads: action.payload.threads,
        users: action.payload.users,
        created: false,
      };
    case 'CREATE_THREAD':
      return {
        ...state,
        created: true,
      };
    default:
      return state;
  }
};

export default threadsAndUsersReducer;
