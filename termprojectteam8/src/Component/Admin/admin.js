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
        alert('This date and time slot already exists.');
        return;
      }
      const currentDate = new Date().toISOString().split('T')[0];

      // Compare the selected date with the current date
      if (date < currentDate) {
        alert('Please select a date on or after the current date.');
        return; // Don't update the date state if it's before the current date
      }
  
      // Update the state first, then update the local storage
      setAvailableDates([...availableDates, dateTimeString]);
  
      // Clear the input fields after adding the new date
      setDate('');
      setTime('');
  
      // Log the updated state (optional)
      console.log(availableDates);
  
      // Update the local storage with the updated availableDates array
      localStorage.setItem('availableSlots', JSON.stringify([...availableDates, dateTimeString]));
    }
  };
  

  return (
    <div className="form-container">
      <h2>New Date and Time Slots for Driving Test</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Date:
          <input
            className="form-input"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <label className="form-label">
          Time:
          <input
            className="form-input"
            type="time"
            value={time}
            onChange={handleTimeChange}
            step="1800"
          />
        </label>
        <button className="form-button" type="submit">
          Add Date
        </button>
      </form>

      <div className="available-dates">
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
