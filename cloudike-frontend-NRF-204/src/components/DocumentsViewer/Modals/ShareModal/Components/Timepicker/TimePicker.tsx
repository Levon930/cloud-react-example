import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

import { TimePickersProps } from './TimePickers.types';

const TimePickers: React.FC<TimePickersProps> = ({ selectedTime, setSelectedTime }) => {
  const changeTimeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <form noValidate>
      <TextField
        id="time"
        type="time"
        value={selectedTime}
        onChange={(e) => changeTimeHandler(e)}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
    </form>
  );
};

export default TimePickers;
