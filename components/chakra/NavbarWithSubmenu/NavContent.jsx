import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  IconButton,
  Flex,
  useColorMode,
  HStack,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';

import * as React from 'react';

import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Submenu } from './Submenu';
import { ToggleButton } from './ToggleButton';
import { links } from './_data';

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
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
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        color={mode('gray.900', 'gray.50')}
        justifyContent="space-between"
        minW="100vw"
        // maxW="90vw"
        bg={mode('gray.50', 'gray.900')}
        {...props}
      >
        <Box ml="15px" mt="15px" flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" textDecoration="none" mx="auto">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box
          visibility={{
            base: 'hidden',
            sm: 'visible',
          }}
        >
          <Link href="/auth/login">
            <Button
              _hover={{ color: 'blue.200' }}
              fontColor={mode('gray.50', 'gray.50')}
              bg={mode('blue.400', 'blue.400')}
              as="a"
              colorScheme="blue"
              ml="-30px"
              mr={['90px', '130px', '130px', '0px']}
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Flex>
      <NavMenu
        color={mode('gray.900', 'gray.50')}
        bg={mode('gray.50', 'gray.900')}
        animate={isOpen ? 'open' : 'closed'}
      >
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile
              color={mode('gray.900', 'gray.50')}
              key={idx}
              bg={mode('gray.50', 'gray.900')}
              link={link}
            />
          ) : (
            <NavLink.Mobile
              color={mode('gray.900', 'gray.50')}
              bg={mode('gray.50', 'gray.900')}
              key={idx}
              href={link.href}
            >
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Link href="/auth/register">
          <Button
            bg={mode('blue.400', 'blue.400')}
            colorScheme="blue"
            w="full"
            size="lg"
            mt="5"
            onClick={onToggle}
          >
            Try for free
          </Button>
        </Link>
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
      justify="space-between"
      position="fixed"
      width="100%"
      pr="80px"
      // zIndex="1000"
      textDecoration="none"
      // w="100vw"

      bg={mode('gray.50', 'gray.900')}
      // px="80px"
      {...props}
    >
      <Box textDecoration="none" as="a" href="#" rel="home">
        <Logo h="6" iconColor="blue.500" />
      </Box>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        spacing="20px"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box
            textDecoration="none"
            as="li"
            key={idx}
            id={`nav__menuitem-${idx}`}
          >
            {link.children ? (
              <Submenu.Desktop
                zIndex="9999999"
                textDecoration="none"
                link={link}
              />
            ) : (
              <NavLink.Desktop
                textDecoration="none"
                zIndex="9999999"
                href={link.href}
              >
                {link.label}
              </NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack
        mb="15px"
        spacing="4"
        minW="30vw"
        // mr="20px"
        // justify="space-between"
      >
        {auth !== null && (
          <Box
            as="a"
            href="#"
            color={mode('blue.600', 'blue.300')}
            fontWeight="bold"
            onClick={logout}
          >
            Log out
          </Box>
        )}

        {auth === null && (
          <>
            <Link href="/auth/login">
              <Box
                as="a"
                href="#"
                _hover={{ color: 'blue.200' }}
                color={mode('blue.600', 'blue.300')}
                fontWeight="bold"
              >
                Sign In
              </Box>
            </Link>
            <Link href="/auth/register">
              <Button
                bg={mode('blue.400', 'blue.400')}
                as="a"
                _hover={{ color: 'blue.200' }}
                href="#"
                colorScheme="blue"
                fontWeight="bold"
              >
                Sign up for free
              </Button>
            </Link>
            <DarkModeSwitch />
          </>
        )}
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};

const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.200',
  };
  const bgColor = {
    light: 'gray.200',
    dark: 'gray.900',
  };
  return (
    <>
      <HStack
        position="fixed"
        top={['10px', '16px', '16px', '16px']}
        right="-30px"
        zIndex="10"
        // backgroundColor="red.500"
        // borderWidth="4px"
        // backgroundColor={bgColor[colorMode]}
        // w="100vw"
        justify="flex-end"
      >
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          zIndex="10000"
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bgColor={bgColor[colorMode]}
          marginRight="4rem"
          // bg={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};
