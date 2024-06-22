import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../services/api';

const getThreadAction = (payload) => ({
  type: 'GET_THREAD',
  payload,
});

const commentCreatedAction = () => ({
  type: 'COMMENT_CREATED',
});

const getThreadDetailThunkAction = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const data = await api.getThreadDetail(id);
    dispatch(getThreadAction(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hideLoading());
  }
};

const createCommentThunkAction = ({ threadId, content }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.createComment({ threadId, content });
    dispatch(commentCreatedAction());
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  getThreadDetailThunkAction,
  createCommentThunkAction,
  getThreadAction,
  commentCreatedAction,
};
