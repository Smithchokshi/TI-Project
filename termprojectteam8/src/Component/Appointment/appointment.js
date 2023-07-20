import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const Appointment = () => {
  dayjs.extend(customParseFormat);
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  // const disabledDates = localStorage.getItem("appointmentDates");
  const disabledDates = ['2023-07-25', '2023-07-29', '2023-07-26', '2023-08-05', '2023-08-15'];

  const disabledDate = current => {
    const formattedCurrent = current.format('YYYY-MM-DD');
    return !disabledDates.includes(formattedCurrent);
  };

  const disabledTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
  });
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledTime}
        onChange={onChange}
        showTime={{
          defaultValue: dayjs('00:00:00', 'HH:mm'),
        }}
      />
    </>
  );
};

export default Appointment;
