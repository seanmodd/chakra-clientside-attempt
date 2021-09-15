// import { Route, Redirect } from "react-router-dom";
import Link from 'next/link'
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));

  // return auth && auth.token ? <Route {...rest} /> : <Redirect to="/login" />;
  return auth && auth.token ? <Link href={...rest} /> : <Link href="/auth/login" />;
};

export default PrivateRoute;
