import { useState } from 'react';

const useLast10Attempts = () => {
  // Initialize state with an empty array
  const [attempts, setAttempts] = useState([]);

  // Function to add a new attempt
  const addAttempt = (file1, file2, params) => {
    // Create a new attempt object
    const newAttempt = { file1, file2, params };

    // Update the attempts array by adding the new attempt
    setAttempts((prevAttempts) => {
      // Keep only the last 10 attempts
      const updatedAttempts = [ newAttempt,...prevAttempts].slice(-10);
      return updatedAttempts;
    });
  };

  return [attempts, addAttempt];
};

export default useLast10Attempts;
