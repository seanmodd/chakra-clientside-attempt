// import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import {useHistory} from 'react-router-dom';
import Link from 'next/link';

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  // const history = useHistory();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    // history.push('/login');
  };

  return (
    <div className="nav bg-light d-flex justify-content-between">
      <Link className="nav-link" href="/">
        Home
      </Link>

      {auth !== null && (
        <Link className="nav-link" href="/profile/dashboard">
          Dashboard
        </Link>
      )}

      {auth !== null && (
        <button className="nav-link pointer" onClick={logout}>
          Logout
        </button>
      )}

      {auth === null && (
        <>
          <Link className="nav-link" href="/auth/login">
            Login
          </Link>
          <Link className="nav-link" href="/auth/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
