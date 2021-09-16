import { Text } from '@chakra-ui/layout';
import * as React from 'react';

export const Copyright = (props) => (
  <Text textAlign="center" w="100%" fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} NextCar, Inc. All rights reserved.
  </Text>
);
