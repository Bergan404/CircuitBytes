import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.session.user)

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
        <NavLink className="create-post" to="/create-post">Create Post</NavLink>
        <NavLink to={`/profile/${username}`}>
          <button className="profile">
            Profile
          </button>
        </NavLink>
          <button className="logout-button" onClick={logout}>Log Out</button>
    </>
  );
}

export default ProfileButton;
