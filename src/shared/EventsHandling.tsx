import React, { useEffect } from 'react';

const KeyboardEventHandler: React.FC = () => {
  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Handle specific keyboard key presses here
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  return <div>Press Enter key to see an alert.</div>;
};

export default KeyboardEventHandler;
