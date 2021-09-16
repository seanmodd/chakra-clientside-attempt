import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Submenu } from './Submenu';
import { ToggleButton } from './ToggleButton';
import { links } from './_data';

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        color={mode('gray.900', 'gray.50')}
        justifyContent="space-between"
        minW="90vw"
        maxW="90vw"
        bg={mode('gray.50', 'gray.900')}
        {...props}
      >
        <Box ml="15px" mt="15px" flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box
          visibility={{
            base: 'hidden',
            sm: 'visible',
          }}
        >
          <Button
            fontColor={mode('gray.900', 'gray.50')}
            bg={mode('blue.400', 'blue.400')}
            as="a"
            colorScheme="blue"
            ml="-60px"
            mr="60px"
          >
            Get Started
          </Button>
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
        <Button
          bg={mode('blue.400', 'blue.400')}
          colorScheme="blue"
          w="full"
          size="lg"
          mt="5"
        >
          Try for free
        </Button>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => (
  <Flex
    className="nav-content__desktop"
    align="center"
    justify="space-between"
    position="fixed"
    zIndex="2"
    w="100vw"
    bg="red.500"
    bg={mode('gray.50', 'gray.900')}
    px="80px"
    {...props}
  >
    <Box as="a" href="#" rel="home">
      <Logo h="6" iconColor="blue.500" />
    </Box>
    <HStack
      as="ul"
      id="nav__primary-menu"
      aria-label="Main Menu"
      listStyleType="none"
    >
      {links.map((link, idx) => (
        <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
          {link.children ? (
            <Submenu.Desktop zIndex="9999999" link={link} />
          ) : (
            <NavLink.Desktop zIndex="9999999" href={link.href}>
              {link.label}
            </NavLink.Desktop>
          )}
        </Box>
      ))}
    </HStack>
    <HStack spacing="4" minW="200px" mr="60px" justify="space-between">
      <Box
        as="a"
        href="#"
        color={mode('blue.600', 'blue.300')}
        fontWeight="bold"
      >
        Sign In
      </Box>
      <Button
        bg={mode('blue.400', 'blue.400')}
        as="a"
        href="#"
        colorScheme="blue"
        fontWeight="bold"
      >
        Sign up for free
      </Button>
    </HStack>
  </Flex>
);

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
