import React, { useState } from 'react';
import './admin.css';
const DrivingTestForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableDates, setAvailableDates] = useState([]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    // Round minutes to the nearest multiple of 30
    const roundedMinutes = Math.round(parseInt(selectedTime.split(':')[1]) / 30) * 30;
    const formattedTime = `${selectedTime.split(':')[0].padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}`;
    setTime(formattedTime);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (date && time) {
      const dateTimeString = `${date} ${time}`;

      // Check if the date and time already exist in the availableDates array
      if (availableDates.includes(dateTimeString)) {
        alert('This date and time slot already exist.');
        return;
      }

      setAvailableDates([...availableDates, dateTimeString]);
      setDate('');
      setTime('');
      console.log(availableDates)
    }
  };

  return (
    <div className="container">
      <h2>New Date and Time Slots for Driving Test</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            className="form-input" // Add the 'form-input' class here
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <label>
          Time:
          <input
            className="form-input" // Add the 'form-input' class here
            type="time"
            value={time}
            onChange={handleTimeChange}
            step="1800"
          />
          {/* Step attribute set to 1800 (30 minutes in seconds) to enforce 30-minute intervals */}
        </label>
        <button className="form-button" type="submit">
          Add Date
        </button>
      </form>

      <div>
        <h3>Available Dates:</h3>
        <ul>
          {availableDates.map((dateTimeString, index) => (
            <li key={index}>{dateTimeString}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrivingTestForm;
