import React, { useRef, useState } from 'react';

const SimpleForm = () => {
  const inputRef = useRef(null);  
  const [inputValue, setInputValue] = useState('');  
  const [message, setMessage] = useState('');  
  const [error, setError] = useState(''); 
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  

    if (!inputValue) {
      setError('Input cannot be empty.');  
      return;
    }

    setError('');  
    try {
      const response = await fetch('http://localhost:8080/submit', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({ input: inputValue }), 
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');  
      }

      const result = await response.json();  
      setMessage('Form submitted successfully.'); 
      setInputValue('');  
    } catch (err) {
      setError(err.message);  // Set error message if there was an issue with the fetch
    }
  };

  return (
    <div>
      <h3>Simple Form with API Validation</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}  // Update inputValue on every change
          placeholder="Enter text"
        />
        <button type="button" onClick={focusInput}>  {/* Button to focus on the input */}
          Focus Input
        </button>
        <button type="submit">Submit</button>  {/* Submit button */}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error if present */}
      {message && <p style={{ color: 'green' }}>{message}</p>}  {/* Display success message if present */}
    </div>
  );
};

export default SimpleForm;
