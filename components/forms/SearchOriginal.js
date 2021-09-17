import React, { useState } from 'react';
import { Select } from 'antd';

import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates';
import { SearchOutlined } from '@ant-design/icons';
import AlgoliaPlaces from 'algolia-places-react';
import moment from 'moment';

const Search = () => (
  <div className="d-flex pb-4">
    <DateRangePicker />
  </div>
);

export default Search;
