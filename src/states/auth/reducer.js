import api from '../../services/api';

const initState = {
  isLogin: !!api.getAccessToken(),
  profile: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogin: true,
      };
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload.profile,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        profile: {},
      };
    default:
      return state;
  }
};

export default authReducer;
