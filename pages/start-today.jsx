import {
  Box,
  Button,
  Center,
  Img,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaCopy, FaPlug, FaRecycle, FaPlayCircle } from 'react-icons/fa';

import Link from 'next/link';
import * as React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { SampleLogo } from '../components/more-start-today/SampleLogo';
import { Testimonial } from '../components/more-start-today/Testimonial';

const Feature = (props) => {
  const { title, children } = props;
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Stack>
  );
};

const App = () => (
  <>
    <Box
      color={mode('gray.800', 'white')}
      as="section"
      py="24"
      bg={mode('gray.100', 'gray.800')}
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Grid
          templateColumns={{
            base: '1fr',
            md: '360px 1fr',
          }}
          gap="64px"
        >
          <Box>
            <Heading size="3xl" letterSpacing="tight" fontWeight="extrabold">
              Buy Cars with ease!
            </Heading>
            <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
              At volutpat diam ut venenatis tellus. Sit amet consectetur.
            </Text>
            <Link href="/">
              <Button
                size="lg"
                colorScheme="blue"
                minH="14"
                rightIcon={<BiRightArrowAlt />}
              >
                Get Started now
              </Button>
            </Link>
            <Testimonial
              logo={<SampleLogo />}
              author="Susan Mana"
              company="Executive director"
              image="https://images.unsplash.com/photo-1531078215167-91fcfe45b39e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2598&q=80"
            >
              &ldquo; At volutpat diam ut venenatis tellus. Sit amet consectetur
              adipiscing elit duis. Quis hendrerit dolor magna eget est. Amet
              est placerat in egestas erat imperdiet sed euismod. &rdquo;
            </Testimonial>
          </Box>
          <Box>
            <Center
              bg={mode('white', 'gray.700')}
              color={mode('gray.800', 'white')}
              shadow="lg"
              minH={{
                base: '320px',
                lg: '480px',
              }}
              rounded="lg"
            >
              <Image src="https://img.ltn.com.tw/Upload/business/page/800/2020/01/08/phpZmc2Tx.jpg" />
            </Center>
            <SimpleGrid
              rounded="lg"
              mt="10"
              p={{
                base: '10',
                lg: '0',
              }}
              columns={{
                base: 1,
                lg: 3,
              }}
              spacing="6"
              bg={{
                base: mode('gray.200', 'gray.700'),
                lg: 'unset',
              }}
            >
              <Feature title="Powered by Chakra">
                At volutpat diam ut venenatis tellus. Sit amet consectetur
                adipiscing elit duis. Quis hendrerit dolor magna eget est.
              </Feature>
              <Feature title="Zero downtime">
                Vestibulum sed arcu non odio euismod. Tristique senectus et
                netus et malesuada fames ac turpis mako.
              </Feature>
              <Feature title="Easy upgrades">
                Convallis a cras semper auctor. Curabitur vitae nunc sed velit.
                Arcu non odio euismod lacinia at quis risus.
              </Feature>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    </Box>
    <Box
      color={mode('gray.800', 'white')}
      as="section"
      bg={mode('gray.50', 'gray.800')}
      pt="16"
      pb="32"
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          textAlign="center"
          letterSpacing="tight"
          fontWeight="extrabold"
        >
          If you like cars, you’re gonna love this
        </Heading>
        <Box mt="24">
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing={{
              base: '16',
              md: '8',
            }}
          >
            <Stack spacing="12" maxW="lg">
              <Feature
                icon={<Box as={FaCopy} w="6" h="6" />}
                title="100% transparent"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt.
              </Feature>
              <Feature
                icon={<Box as={FaPlug} w="6" h="6" />}
                title="Local bank support"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt.
              </Feature>
              <Feature
                icon={<Box as={FaRecycle} w="6" h="6" />}
                title="Savings automation"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt.
              </Feature>
            </Stack>
            <Center shadow="lg" minH="26rem">
              <Img
                objectFit="cover"
                w="full"
                h="full"
                src="https://img.ltn.com.tw/Upload/business/page/800/2020/01/08/phpZmc2Tx.jpg"
                alt="Holding phone with app installed"
              />
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  </>
);
export default App;
