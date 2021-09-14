import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:8000/api';

console.log('REACT_APP_API', BASE_URL);

export const createHotel = async (token, data) =>
  await axios.post(`${BASE_URL}/create-hotel`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allHotels = async () =>
  // await axios.get(`${BASE_URL}/hotels`);
  await axios.get(`${BASE_URL}/hotels`);

export const diffDays = (from, to) => {
  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from);
  const end = new Date(to);
  const difference = Math.round(Math.abs((start - end) / day));
  return difference;
};

export const sellerHotels = async (token) =>
  await axios.get(`${BASE_URL}/seller-hotels`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteHotel = async (token, hotelId) =>
  await axios.delete(`${BASE_URL}/delete-hotel/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const read = async (hotelId) =>
  await axios.get(`${BASE_URL}/hotel/${hotelId}`);

export const updateHotel = async (token, data, hotelId) =>
  await axios.put(`${BASE_URL}/update-hotel/${hotelId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const userHotelBookings = async (token) =>
  await axios.get(`${BASE_URL}/user-hotel-bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const isAlreadyBooked = async (token, hotelId) =>
  await axios.get(`${BASE_URL}/is-already-booked/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const searchListings = async (query) =>
  await axios.post(`${BASE_URL}/search-listings`, query);
