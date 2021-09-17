import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa';
import { Feature } from '../components/HostToday/Feature';

const App = () => (
  <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="32">
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
      <Heading textAlign="center" letterSpacing="tight" fontWeight="extrabold">
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
);
export default App;
