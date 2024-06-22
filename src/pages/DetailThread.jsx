import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentThunkAction, getThreadDetailThunkAction } from '../states/detailThread/action';
import { useParams } from 'react-router-dom';
import formatDate from '../utils/formatdate';

function DetailThread() {
  const { thread, created } = useSelector((state) => state.threadDetail);
  const { id } = useParams();
  const [content, setContent] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCommentThunkAction({ threadId: id, content }));
  };

  useEffect(() => {
    dispatch(getThreadDetailThunkAction(id));
  }, []);

  useEffect(() => {
    if (created) {
      dispatch(getThreadDetailThunkAction(id));
    }
  }, [created]);
  return (
    <div>
      <h1>DetailThread</h1>
      {thread && (
        <div>
          <h1>{thread.title}</h1>
          <p>{thread.body}</p>
          <p>{thread.category}</p>
          <p>{formatDate(thread.createdAt)}</p>
          <div style={{ display: 'flex' }}>
            <img src={thread.owner?.avatar} alt="" />
            <p>{thread.owner?.name}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <button
              type="submit"
            >
              comment
            </button>
          </form>
          <p>{thread.comments?.length}</p>
          {thread.comments?.map((comment) => (
            <div key={comment.id}>
              <p>{comment.content}</p>
              <p>{formatDate(comment.createdAt)}</p>
              <div style={{ display: 'flex' }}>
                <img src={comment.owner?.avatar} alt="" />
                <p>{comment.owner?.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DetailThread;
