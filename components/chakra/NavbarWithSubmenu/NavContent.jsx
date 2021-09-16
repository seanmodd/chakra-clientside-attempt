import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  VStack,
  useDisclosure,
  VisuallyHidden,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Submenu } from './Submenu';
import { ToggleButton } from './ToggleButton';
import { links } from './_data';

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const history = useHistory();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    // history.push('/login');
  };
  return (
    <>
      <HStack
        spacing="50px"
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
        my="20px"
        mx="40px"
      >
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <HStack
          href="#"
          rel="home"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius="10px"
          pt="5px"
          bg="gray.50"
          justify="center"
          px="35px"
        >
          <Heading fontSize="40px">NextCar</Heading>
          {/* <Logo h="6" iconColor="blue.500" /> */}
          <Image
            w="20px"
            src="https://res.cloudinary.com/seanmodd/image/upload/v1629613337/face_4_2b9c52a196.png"
          />
        </HStack>
        <Box
          visibility={{
            base: 'hidden',
            sm: 'visible',
          }}
        >
          <Button as="a" colorScheme="blue">
            Get Started
          </Button>
        </Box>
      </HStack>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {/* {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )} */}
        <VStack spacing="30px" mb="30px">
          <Link href="/pricing">Home</Link>

          {auth !== null && (
            <Link className="nav-link" href="/profile/dashboard">
              Dashboard
            </Link>
          )}
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          {auth !== null && (
            <Button w="full" className="nav-link pointer" onClick={logout}>
              <Link passHref>Logout</Link>
            </Button>
          )}
        </VStack>
        {auth === null && (
          <>
            <VStack spacing="30px">
              <Button w="full">
                <Link className="nav-link" href="/auth/login">
                  Login
                </Link>
              </Button>
              <Button w="full">
                <Link className="nav-link" href="/auth/register">
                  Register
                </Link>
              </Button>
            </VStack>
          </>
        )}{' '}
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  // const history = useHistory();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    // history.push('/login');
  };
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-around"
      {...props}
      my="50px"
    >
      <HStack
        href="#"
        rel="home"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        borderRadius="10px"
        justify="center"
        pt="5px"
        bg="gray.50"
        px="15px"
      >
        <Heading fontSize="40px">NextCar</Heading>
        {/* <Logo h="6" iconColor="blue.500" /> */}
        <Image
          w="20px"
          src="https://res.cloudinary.com/seanmodd/image/upload/v1629613337/face_4_2b9c52a196.png"
        />
      </HStack>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
        // w="400px"
        spacing="60px"
        justify="space-between"
      >
        <Link className="nav-link" href="/">
          Home
        </Link>
        {auth !== null && (
          <>
            <Box as="li">
              <Link className="nav-link" href="/profile/dashboard">
                Dashboard
              </Link>
            </Box>
            <Box as="li">
              <Link className="nav-link" href="/profile/dashboard-seller">
                Create Posting!
              </Link>
            </Box>
          </>
        )}
        <Link className="nav-link" href="/pricing">
          Pricing
        </Link>
        <Link className="nav-link" href="/faq">
          FAQ
        </Link>
      </HStack>
      <HStack spacing="8" minW="240px" justify="flex-end">
        {auth === null && (
          <>
            <Button>
              <Link className="nav-link" href="/auth/login">
                Login
              </Link>
            </Button>
            <Button>
              <Link className="nav-link" href="/auth/register">
                Register
              </Link>
            </Button>
          </>
        )}
        {auth !== null && <a onClick={logout}>Logout</a>}
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
