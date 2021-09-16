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

import * as React from 'react';

import { HiCash, HiLocationMarker, HiShieldCheck } from 'react-icons/hi';

import { Card } from './Card';
import { CustomerReviews } from './CustomerReviews';

const App = () => (
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

export default App;
