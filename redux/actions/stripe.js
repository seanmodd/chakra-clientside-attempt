import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:8000/api';

export const createConnectAccount = async (token) =>
  await axios.post(
    `${BASE_URL}/create-connect-account`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAccountStatus = async (token) =>
  axios.post(
    `${BASE_URL}/get-account-status`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAccountBalance = async (token) =>
  axios.post(
    `${BASE_URL}/get-account-balance`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const currencyFormatter = (data) =>
  (data.amount / 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });

export const payoutSetting = async (token) =>
  await axios.post(
    `${BASE_URL}/payout-setting`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getSessionId = async (token, hotelId) =>
  await axios.post(
    `${BASE_URL}/stripe-session-id`,
    {
      hotelId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const stripeSuccessRequest = async (token, hotelId) =>
  await axios.post(
    `${BASE_URL}/stripe-success`,
    { hotelId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
