/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../utils/formatdate';
import { getThreadsAndUsersThunkAction } from '../states/threadsAndUsers/action';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
  const { threads, users } = useSelector((state) => state.threadsAndUsers);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(getThreadsAndUsersThunkAction());
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        {threads.map((thread) => (
          <div key={thread.id}>
            <h1 onClick={() => handleDetail(thread.id)} style={{ cursor: 'pointer' }}>{thread.title}</h1>
            <p>{thread.body}</p>
            <p>{formatDate(thread.createdAt)}</p>
            <div style={{ display: 'flex' }}>
              <img src={users.find((user) => user.id === thread.ownerId).avatar} />
              <p>{users.find((user) => user.id === thread.ownerId).name}</p>
            </div>
          </div>
        ))}
        {isLogin && <Link to="/create" style={{ position: 'fixed', bottom: '10px', right: '10px' }}>tambah thread</Link>}
      </div>
    </div>
  );
}

export default Homepage;
