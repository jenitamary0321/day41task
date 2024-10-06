// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the components for the password reset flow
import ForgetPasswordLink from './components/ForgetPasswordLink';
import UserVerification from './components/UserVerification';
import PasswordReset from './components/PasswordReset';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ForgetPasswordLink />} />
        <Route path="/verify/:token" element={<UserVerification />} />
        <Route path="/reset-password/:token" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default App;
