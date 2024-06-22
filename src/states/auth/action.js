/* eslint-disable max-len */
import Swal from 'sweetalert2';
import api from '../../services/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const loginSucess = () => ({
  type: 'LOGIN_SUCCESS',
});

const logoutAction = () => {
  api.removeAccessToken();
  return {
    type: 'LOGOUT',
  };
};

const actionProfile = (profile) => ({
  type: 'SET_PROFILE',
  payload: {
    profile,
  },
});

const handleLoginThunkAction = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.login({ email, password });
    dispatch(loginSucess());
    Swal.fire({
      icon: 'success',
      title: 'Login Success',
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hideLoading());
  }
};

const handleRegisterThunkAction = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.register({ name, email, password });
    dispatch(loginSucess());
    Swal.fire({
      icon: 'success',
      title: 'Register Success',
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
    console.log(error);
  } finally {
    dispatch(hideLoading());
  }
};

const getProfileThunkAction = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const profile = await api.getOwnProfile();
    dispatch(actionProfile(profile));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  loginSucess, logoutAction, handleLoginThunkAction, handleRegisterThunkAction, getProfileThunkAction,
};
