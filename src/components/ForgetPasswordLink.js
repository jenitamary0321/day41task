// forgetPasswordLink.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPasswordLink = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to send a verification link to the user's email
    // For demo, we directly navigate to the verification page
    navigate(`/verify/${encodeURIComponent(email)}`);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Verification Link</button>
      </form>
    </div>
  );
};

export default ForgetPasswordLink;
