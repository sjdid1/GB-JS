import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    setFahrenheit((celsiusValue * 9 / 5) + 32);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius((fahrenheitValue - 32) * 5 / 9);
  };

  return (
    <div>
      <TextField
        label="Celsius"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        value={celsius}
        onChange={handleCelsiusChange}
        InputProps={{
            startAdornment: <InputAdornment position="start">C</InputAdornment>,
          }}
      />
      <TextField
        label="Fahrenheit"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        InputProps={{
            startAdornment: <InputAdornment position="start">F</InputAdornment>,
          }}
      />
      <Button variant="contained" onClick={() => {
        setCelsius('');
        setFahrenheit('');
      }}>
        Clear
      </Button>
    </div>
  );
};

export default TemperatureConverter;
