import AlgoliaPlaces from 'algolia-places-react';
import ChakraForm from './App';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue as mode,
  VStack,
  Select,
} from '@chakra-ui/react';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { HiCloudUpload } from 'react-icons/hi';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FieldGroup } from './FormAccountSettings/FieldGroup';

const { Option } = Select;

const config = {
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  language: 'en',
  // countries: ["au"],
};

const HotelEditForm = ({
  values,
  setValues,
  handleChange,
  handleImageChange,
  handleSubmit,
}) => {
  const { title, content, location, price, bed, from, to } = values;

  return (
    <Box
      px={{
        base: '4',
        md: '10',
      }}
      py="16"
      maxWidth="3xl"
      mx="auto"
    >
      <form id="settings-form" onSubmit={handleSubmit}>
        <Stack spacing="4" divider={<StackDivider />}>
          <Heading
            color={mode('gray.900', 'gray.50')}
            size="lg"
            as="h1"
            paddingBottom="4"
          >
            New Car Posting
          </Heading>
          <FieldGroup
            color={mode('gray.900', 'gray.50')}
            title="Vehicle Details"
          >
            <VStack width="full" spacing="6">
              <FormControl id="name">
                <Input
                  onChange={handleChange}
                  placeholder="Title"
                  className="form-control m-2"
                  value={title}
                  type="text"
                  name="title"
                  maxLength={255}
                />
              </FormControl>

              <FormControl id="bio">
                <Textarea
                  rows={3}
                  name="content"
                  placeholder="Content"
                  className="form-control m-2"
                  onChange={handleChange}
                  value={content}
                />
                <FormHelperText>
                  Brief description for your vehicle. Must include year, make,
                  model, and color.
                </FormHelperText>
              </FormControl>
            </VStack>
          </FieldGroup>
          <FieldGroup color={mode('gray.900', 'gray.50')} title="Location">
            <AlgoliaPlaces
              className="form-control m-2"
              placeholder="Location"
              defaultValue={location}
              options={config}
              onChange={({ suggestion }) => setLocation(suggestion.value)}
              style={{ height: '50px' }}
            />
          </FieldGroup>
          <FieldGroup color={mode('gray.900', 'gray.50')} title="Price per Day">
            <Input
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="$ Amount"
              className="form-control m-2"
              style={{ width: '200px' }}
              justifyContent="center"
              alignItems="center"
              value={price}
            />
          </FieldGroup>
          <FieldGroup
            color={mode('gray.900', 'gray.50')}
            title="Vehicle Photos"
          >
            <Stack direction="row" spacing="6" align="center" width="full">
              <Box>
                <VStack spacing="5">
                  <Input
                    type="file"
                    name="image"
                    justifyContent="center"
                    alignItems="center"
                    onChange={handleImageChange}
                    accept="image/*"
                    width="250px"
                    height="30px"
                    borderWidth="0px"
                    bg={mode('#f7fafc', 'gray.900')}
                    color={mode('gray.900', 'gray.50')}
                    fontWeight="600"
                    borderColor="#edf2f7"
                  />
                  <Input
                    type="file"
                    name="image"
                    justifyContent="center"
                    alignItems="center"
                    onChange={handleImageChange}
                    accept="image/*"
                    width="250px"
                    height="30px"
                    borderWidth="0px"
                    bg={mode('#f7fafc', 'gray.900')}
                    color={mode('gray.900', 'gray.50')}
                    fontWeight="600"
                    borderColor="#edf2f7"
                  />
                  <Input
                    type="file"
                    name="image"
                    justifyContent="center"
                    alignItems="center"
                    onChange={handleImageChange}
                    accept="image/*"
                    width="250px"
                    height="30px"
                    borderWidth="0px"
                    bg={mode('#f7fafc', 'gray.900')}
                    color={mode('gray.900', 'gray.50')}
                    fontWeight="600"
                    borderColor="#edf2f7"
                  />
                </VStack>
                <Text
                  fontSize="sm"
                  mt="3"
                  color={mode('gray.500', 'whiteAlpha.600')}
                >
                  .jpg, .gif, or .png. Max file size 700K.
                </Text>
              </Box>
            </Stack>
          </FieldGroup>
        </Stack>
        <FieldGroup mt="8">
          <HStack width="full">
            <Button type="submit" colorScheme="blue">
              Save Changes
            </Button>
            <Button color={mode('gray.900', 'gray.900')} variant="outline">
              Cancel
            </Button>
          </HStack>
        </FieldGroup>
      </form>
    </Box>
  );
};

export default HotelEditForm;
