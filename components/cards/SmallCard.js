// ! KEEP THIS COMPONENT!!!
import Link from 'next/link';
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
import { Card } from './SingleCar/Card';
import { CustomerReviews } from './SingleCar/CustomerReviews';
import { currencyFormatter } from '../../redux/actions/stripe';
import { diffDays } from '../../redux/actions/hotel';
import SingleCar from './SingleCar/App';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:8000/api';

function SmallCard({
  h,
  handleHotelDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) {
  const router = useRouter();
  console.log(h);
  return (
    <>
      <VStack spacing="100px">
        //! BELOW IS NEW CARD
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
                  src={`${BASE_URL}/hotel/image/${h._id}`}
                  alt={h.title}
                />

                {showViewMoreButton && (
                  <Button
                    mt="8"
                    width="full"
                    colorScheme="blue"
                    display={{
                      base: 'none',
                      md: 'initial',
                    }}
                    onClick={() => router.push(`/hotels/${h._id}`)}
                  >
                    Show more
                  </Button>
                )}
                {owner && (
                  <>
                    <Link href={`/hotels/edit/${h._id}`}>
                      <EditOutlined className="text-warning" />
                    </Link>
                    <DeleteOutlined
                      onClick={() => handleHotelDelete(h._id)}
                      className="text-danger"
                    />
                  </>
                )}
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
                    {h.title}
                  </Text>
                  <Text>
                    {currencyFormatter({
                      amount: h.price * 100,
                      currency: 'usd',
                    })}
                    /day
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
                      {h.postedBy.name}
                    </Text>
                    <Icon as={HiShieldCheck} color="green.500" />
                  </HStack>
                </Stack>
                <Text mt="2">{`${h.content.substring(0, 200)}...`}</Text>
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
                      {h.location}
                    </Text>
                  </HStack>
                </Wrap>
                <VStack align="flex-start">
                  <Text>
                    Available for a max of {diffDays(h.from, h.to)}{' '}
                    {diffDays(h.from, h.to) <= 1 ? ' day' : ' days'}
                  </Text>
                  <Text color="green.500">
                    Available from {new Date(h.from).toLocaleDateString()} to{' '}
                    {new Date(h.to).toLocaleDateString()}
                  </Text>
                </VStack>

                <Wrap
                  shouldWrapChildren
                  mt="5"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  {['2020', 'Tesla', `Seats ${h.bed}`].map((tag) => (
                    <Tag key={tag} color="inherit" px="3">
                      {tag}
                    </Tag>
                  ))}
                </Wrap>
              </Box>
            </Stack>

            {showViewMoreButton && (
              <Button
                mt="8"
                width="full"
                colorScheme="blue"
                display={{
                  md: 'none',
                }}
                onClick={() => router.push(`/hotels/${h._id}`)}
              >
                Show more
              </Button>
            )}
            {owner && (
              <>
                <Link href={`/hotels/edit/${h._id}`}>
                  <EditOutlined className="text-warning" />
                </Link>
                <DeleteOutlined
                  onClick={() => handleHotelDelete(h._id)}
                  className="text-danger"
                />
              </>
            )}
          </Card>
        </Box>
        //! ABOVE IS NEW CARD
        {/* <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              {h.image && h.image.contentType ? (
                <img
                  src={`${BASE_URL}/hotel/image/${h._id}`}
                  alt="default hotel view"
                  className="card-image img img-fluid"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
                  alt="default hotel view"
                  className="card-image img img-fluid"
                />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  {h.title}{' '}
                  <span className="float-right text-primary">
                    {currencyFormatter({
                      amount: h.price * 100,
                      currency: 'usd',
                    })}
                  </span>{' '}
                </h3>
                <p className="alert alert-info">{h.location}</p>
                <p className="card-text">{`${h.content.substring(
                  0,
                  200
                )}...`}</p>
                <p className="card-text">
                  <span className="float-right text-primary">
                    for {diffDays(h.from, h.to)}{' '}
                    {diffDays(h.from, h.to) <= 1 ? ' day' : ' days'}
                  </span>
                </p>
                <p className="card-text">{h.bed} bed</p>
                <p className="card-text">
                  Available from {new Date(h.from).toLocaleDateString()}
                </p>

                <div className="d-flex justify-content-between h4">
                  {showViewMoreButton && (
                    <button
                      onClick={() => router.push(`/hotels/${h._id}`)}
                      className="btn btn-primary"
                    >
                      Show more
                    </button>
                  )}
                  {owner && (
                    <>
                      <Link href={`/hotels/edit/${h._id}`}>
                        <EditOutlined className="text-warning" />
                      </Link>
                      <DeleteOutlined
                        onClick={() => handleHotelDelete(h._id)}
                        className="text-danger"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </VStack>
    </>
  );
}

export default SmallCard;
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
