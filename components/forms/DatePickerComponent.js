import React, { useState } from 'react';
import { DateRangePickerInput } from 'react-datetime-range-super-picker';

import 'react-datetime-range-super-picker/dist/index.css';

export const DatePickerComponent = () => {
  const [from_date, setFromDate] = useState(new Date());
  const [to_date, setToDate] = useState(new Date());

  const handleFromDateUpdate = ({ date }) => {
    setFromDate(date);
  };

  const handleToDateUpdate = ({ date }) => {
    setToDate(date);
  };

  return (
    <DateRangePickerInput
      style={{
        fontFamily: 'Poppins',
        fontSize: '14px',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'none',

        color: '#676767ec',
        borderRadius: '5px',
      }}
      from_date={from_date}
      to_date={to_date}
      onFromDateUpdate={handleFromDateUpdate}
      onToDateUpdate={handleToDateUpdate}
      theme="dark"
      colors={{
        primary_color: '#f7fafc',
        primary_highlight_color: '#a4cbff',
        primary_font_color: '#171923',
        light_font_color: '#c4deff',
        secondary_highlight_color: '#006eff',
      }}
    />
  );
};
