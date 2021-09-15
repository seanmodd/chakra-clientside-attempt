import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getAccountStatus } from '../../redux/actions/stripe';
import { updateUserInLocalStorage } from '../../redux/actions/auth';
// ! useRouter from Nextjs
const StripeCallback = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   if (auth && auth.token) accountStatus();
  // }, [auth, accountStatus]);

  useEffect(() => {
    if (auth && auth.token) accountStatus();
  }, [auth]);

  const accountStatus = async () => {
    try {
      const res = await getAccountStatus(auth.token);
      // console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", res);
      // update user in local storage
      updateUserInLocalStorage(res.data, () => {
        // update user in redux
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: res.data,
        });
        // redirect user to dashboard
        router.push('profile/dashboard-seller');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center p-5">
      <LoadingOutlined className="display-1 p-5 text-danger" />
    </div>
  );
};

export default StripeCallback;
