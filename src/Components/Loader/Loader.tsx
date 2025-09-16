// Components/Loader/Loader.tsx
import React from 'react';
import './Loader.css';

// eslint-disable-next-line react-refresh/only-export-components
const Loader: React.FC = () => {
  return (
    <div data-testid="loader">
      <div className="spinner"></div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Loader;
