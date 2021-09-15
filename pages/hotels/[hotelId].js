import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useStore } from "react-redux";
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { getSessionId } from '../../redux/actions/stripe';
import { read, diffDays, isAlreadyBooked } from '../../redux/actions/hotel';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:8000/api';
const BASE_STRIPE_KEY =
  process.env.REACT_APP_STRIPE_KEY ||
  'pk_test_OCpqeAwQ6w09CkifEKdqgrwY00sHOnyHKh';
const ViewHotel = () => {
  const router = useRouter();
  const [hotel, setHotel] = useState({});
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  const {
    query: { hotelId },
  } = router;
  console.log(router, 'router');
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    loadSellerHotel();
  }, []);

  useEffect(() => {
    if (auth && auth.token) {
      isAlreadyBooked(auth.token, hotelId).then((res) => {
        // console.log(res);
        if (res.data.ok) setAlreadyBooked(true);
      });
    }
  }, [auth, hotelId]);

  const loadSellerHotel = async () => {
    const res = await read(hotelId);
    // console.log(res);
    setHotel(res.data);
    console.log(res.data, 'image on detail');
    setImage(`${BASE_URL}/hotel/image/${res.data._id}`);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!auth || !auth.token) {
      router.push('/auth/login');
      return;
    }

    setLoading(true);
    if (!auth) router.push('/auth/login');
    // console.log(auth.token, hotelId);
    //! Insert below code to get sessionId

    const res = await getSessionId(auth.token, hotelId);
    //! pasting below:
    if (res.statusCode === 500) {
      console.error(res.message);
      return;
    }
    //! paste ended
    console.log(res.data.sessionId, 'res');
    // const checkoutSession = await axios.post('/api/checkout_sessions', {
    //   amount: 400,
    // });
    // console.log(checkoutSession, 'session info');
    // if ((checkoutSession as any).statusCode === 500) {
    // console.error((checkoutSession as any).message);
    // return;
    // }
    //!

    // console.log("get sessionid resposne", res.data.sessionId);
    const stripe = await loadStripe(BASE_STRIPE_KEY);
    console.log(stripe, 'stripe');
    return;
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      //! commenting out below to replace res with checkoutSession
      // sessionId: res.id,

      sessionId: res.data.sessionId,
    });
    console.log(error, 'error');
    //   stripe
    //     .redirectToCheckout({
    //       sessionId: res.data.sessionId,
    //     })
    //     .then((result) => console.log(result));
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>{hotel.title}</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            <img src={image} alt={hotel.title} className="img img-fluid m-2" />
          </div>

          <div className="col-md-6">
            <br />
            <b>{hotel.content}</b>
            <p className="alert alert-info mt-3">${hotel.price}</p>
            <p className="card-text">
              <span className="float-right text-primary">
                for {diffDays(hotel.from, hotel.to)}{' '}
                {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'}
              </span>
            </p>
            <p>
              From <br />{' '}
              {moment(new Date(hotel.from)).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
            <p>
              To <br />{' '}
              {moment(new Date(hotel.to)).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
            <i>Posted by {hotel.postedBy && hotel.postedBy.name}</i>
            <br />
            <button
              onClick={handleClick}
              className="btn btn-block btn-lg btn-primary mt-3"
              disabled={loading || alreadyBooked}
            >
              {loading
                ? 'Loading...'
                : alreadyBooked
                ? 'Already Booked'
                : auth && auth.token
                ? 'Book Now'
                : 'Login to Book'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHotel;
