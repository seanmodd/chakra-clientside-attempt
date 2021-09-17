// import 'react-dates/initialize';
import { Box, Flex, VStack, Heading, HStack, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
// import { DatePicker, Select } from 'antd';
// import RangePicker from 'react-range-picker';
import DatePicker from 'react-multi-date-picker';
import { DateObject } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import { SearchOutlined } from '@ant-design/icons';
import AlgoliaPlaces from 'algolia-places-react';
import moment from 'moment';

// destructure values from ant components
// const { RangePicker } = DatePicker;
// const { Option } = Select;

const config = {
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  language: 'en',
  // accessibility: {
  //   pinButton: {
  //     'aria-label': 'use browser geolocation',
  //     display: 'none',
  //   },
  //   clearButton: {
  //     'tab-index': 13,
  //     display: 'none',
  //   },
  // },
  style: true,
  // countries: ["au"],
};

const Search = () => {
  // state
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [bed, setBed] = useState('');
  // route

  const handleSubmit = () => {
    history.push(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };
  const [values, setValues] = useState([
    new DateObject().subtract(4, 'days'),
    new DateObject().add(4, 'days'),
  ]);

  return (
    <HStack
      // my="0px"

      alignItems="center"
      w="100vw"
      // style={{ marginTop: '0px', marginBottom: '0px' }}
      justifyContent="center"
    >
      <HStack>
        <Box height="80px">
          <AlgoliaPlaces
            className="algolia-places"
            placeholder="Location"
            defaultValue={location}
            options={config}
            onChange={({ suggestion }) => setLocation(suggestion.value)}
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'none',

              color: '#676767ec',
              borderRadius: '5px',
            }}
          />
        </Box>
        <Box h="80px">
          <DatePicker
            value={values}
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              height: '40px',
              borderColor: 'none',
              color: '#989898eb',
              borderRadius: '5px',
            }}
            onChange={(value, dateString) => setDate(dateString)}
            disabledDate={(current) =>
              current && current.valueOf() < moment().subtract(1, 'days')
            }
            range
            plugins={[<DatePanel />]}
          />
        </Box>

        {/* <RangePicker
        style={{ marginTop: '0px', marginBottom: '0px' }}
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, 'days')
        }
        // className="w-100"
      /> */}

        {/* <Select
        
        onChange={(value) => setBed(value)}
        className="w-100"
        size="large"
        placeholder="Number of seats"
      >
        <Option key={1}>{1}</Option>
        <Option key={2}>{2}</Option>
        <Option key={3}>{3}</Option>
        <Option key={4}>{4}</Option>
      </Select> */}
        <Box h="80px">
          <Select color="#989898eb" placeholder="Capacity">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6+">6+</option>
          </Select>
        </Box>
        <Box h="80px">
          <SearchOutlined
            onClick={handleSubmit}
            style={{ color: '#00a2ffeb' }}
          />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Search;
