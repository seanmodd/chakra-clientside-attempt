import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { stripeSuccessRequest } from '../../../redux/actions/stripe';
// ! useRouter from Nextjs

const StripeCancel = () => {
  const router = useRouter();
  const { query: hotelId } = router;
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }));
  // const { token } = auth;

  useEffect(() => {
    // console.log(
    //   "send this hotelid to backend to crate order",
    //   hotelId
    // );
    stripeSuccessRequest(token, hotelId).then((res) => {
      if (res.data.success) {
        // console.log("stripe success response", res.data);
        router.push('/profile/dashboard');
      } else {
        router.push('/stripe/cancel');
      }
    });
  }, [router, token, hotelId]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-5">
        <LoadingOutlined className="display-1 text-danger p-5" />
      </div>
    </div>
  );
};

export default StripeCancel;
