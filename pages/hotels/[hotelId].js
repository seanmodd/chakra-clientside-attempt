import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { HiCash, HiLocationMarker, HiShieldCheck } from 'react-icons/hi';
import {
  Avatar,
  Box,
  Image,
  Button,
  VStack,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
// import { useStore } from "react-redux";
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { CustomerReviews } from '../../components/cards/SingleCar/CustomerReviews';
import { Card } from '../../components/cards/SingleCar/Card';

import { getSessionId } from '../../redux/actions/stripe';
import { read, diffDays, isAlreadyBooked } from '../../redux/actions/hotel';
// import { getServerSideProps } from '../../.next/static/chunks/pages';

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
  console.log('hotelId:', hotelId);
  console.log(router, 'router');
  const { auth } = useSelector((state) => state);

  console.log('hotelID: ', hotelId);
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
    // TODO: implement getStaticProps/paths instead
    if (hotelId) {
      const res = await read(hotelId);
      // console.log(res);
      setHotel(res.data);
      console.log(res.data, 'image on detail');
      setImage(`${BASE_URL}/hotel/image/${res.data._id}`);
    }
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
    // return;
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
      <Box as="section" bg={useColorModeValue('gray.50', 'gray.900')} py="12">
        <Card>
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '3',
              md: '10',
            }}
            align="flex-start"
          >
            <VStack spacing="4">
              <Image w="650px" src={image} alt={hotel.title} />

              <Button
                mt="8"
                width="full"
                colorScheme="blue"
                display={{
                  base: 'none',
                  md: 'initial',
                }}
                onClick={handleClick}
                disabled={loading || alreadyBooked}
              >
                {loading
                  ? 'Loading...'
                  : alreadyBooked
                  ? 'Already Booked'
                  : auth && auth.token
                  ? 'Book Now'
                  : 'Login to Book'}
              </Button>
            </VStack>
            <Box>
              <Stack
                spacing={{
                  base: '0',
                  md: '0',
                }}
                direction={{
                  base: 'column',
                  md: 'column',
                }}
              >
                <Text fontWeight="bold" fontSize="xl">
                  {hotel.title}
                </Text>
                <VStack
                  align="flex-start"
                  fontSize={{
                    base: 'sm',
                    md: 'lg',
                  }}
                >
                  <Text>${hotel.price} per day</Text>
                  <HStack>
                    <Icon m="0" p="0" as={HiShieldCheck} color="green.500" />
                    <Text
                      pt="5px"
                      color={useColorModeValue('gray.500', 'gray.300')}
                    >
                      <i>Posted by {hotel.postedBy && hotel.postedBy.name}</i>
                    </Text>
                  </HStack>
                </VStack>
              </Stack>
              <Wrap shouldWrapChildren my="4" spacing="4">
                <CustomerReviews reviewCount={84} rating={5.0} />
                <HStack>
                  <Icon as={HiCash} fontSize="xl" color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    <b>$2.5k</b> earned
                  </Text>
                </HStack>

                <HStack spacing="1">
                  <Icon as={HiLocationMarker} color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {hotel.location}
                  </Text>
                </HStack>
              </Wrap>
              <Box fontSize="sm" noOfLines={2}>
                <b>{hotel.content}</b>
              </Box>
              <p className="card-text">
                Available for a max of {diffDays(hotel.from, hotel.to)}{' '}
                {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'}
              </p>
              <p>From {moment(new Date(hotel.from)).format('MM/DD/YYYY')}</p>
              <p>To {moment(new Date(hotel.to)).format('MM/DD/YYYY')}</p>
              <Wrap
                shouldWrapChildren
                mt="5"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                {['2020', 'Tesla', `Seats ${hotel.bed}`].map((tag) => (
                  <Tag key={tag} color="inherit" px="3">
                    {tag}
                  </Tag>
                ))}
              </Wrap>
            </Box>
          </Stack>

          <br />
          <Button
            mt="8"
            width="full"
            colorScheme="blue"
            display={{
              md: 'none',
            }}
            onClick={handleClick}
            disabled={loading || alreadyBooked}
          >
            {loading
              ? 'Loading...'
              : alreadyBooked
              ? 'Already Booked'
              : auth && auth.token
              ? 'Book Now'
              : 'Login to Book'}
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default ViewHotel;
//! BELOW IS FROM CHAKRA PRO
const CarCard = () => (
  <Box as="section" bg={useColorModeValue('gray.50', 'gray.900')} py="12">
    <Card>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={{
          base: '3',
          md: '10',
        }}
        align="flex-start"
      >
        <VStack spacing="4">
          <Image
            w="400px"
            src="https://res.cloudinary.com/seanmodd/image/upload/v1631817451/613e82a549081f231a0b55ac_uhgwsg.jpg"
            name="Tesla Model 3"
          />
          <Button
            width="full"
            colorScheme="blue"
            display={{
              base: 'none',
              md: 'initial',
            }}
          >
            Contact me
          </Button>
        </VStack>
        <Box>
          <Stack
            spacing={{
              base: '1',
              md: '2',
            }}
            direction={{
              base: 'column',
              md: 'column',
            }}
          >
            <Text as="h2" fontWeight="bold" fontSize="xl">
              2020 Tesla Model 3
            </Text>
            <HStack
              fontSize={{
                base: 'md',
                md: 'lg',
              }}
            >
              <Text
                as="span"
                color={useColorModeValue('gray.500', 'gray.300')}
                lineHeight="1"
              >
                @meldesigner
              </Text>
              <Icon as={HiShieldCheck} color="green.500" />
            </HStack>
          </Stack>
          <Text mt="2">Graphic Designer and WordPress Expert</Text>
          <Wrap shouldWrapChildren my="4" spacing="4">
            <CustomerReviews reviewCount={84} rating={5.0} />
            <HStack>
              <Icon as={HiCash} fontSize="xl" color="gray.400" />
              <Text
                fontSize="sm"
                fontWeight="medium"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                <b>$2.5k</b> earned
              </Text>
            </HStack>

            <HStack spacing="1">
              <Icon as={HiLocationMarker} color="gray.400" />
              <Text
                fontSize="sm"
                fontWeight="medium"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                Dubai, UAE
              </Text>
            </HStack>
          </Wrap>
          <Box fontSize="sm" noOfLines={2}>
            Brand new Tesla Model 3!...
          </Box>
          <Wrap
            shouldWrapChildren
            mt="5"
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            {['Adobe Photoshop', 'UX/UI', 'Landing Page', 'Web Design'].map(
              (tag) => (
                <Tag key={tag} color="inherit" px="3">
                  {tag}
                </Tag>
              )
            )}
          </Wrap>
        </Box>
      </Stack>
      <Button
        mt="8"
        width="full"
        colorScheme="blue"
        display={{
          md: 'none',
        }}
      >
        Contact me
      </Button>
    </Card>
  </Box>
);
