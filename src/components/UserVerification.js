// userVerification.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    // Simulate verification process
    setIsVerified(true);
    // Navigate to the password reset page after verification
    navigate(`/reset-password/${encodeURIComponent(token)}`);
  };

  return (
    <div>
      <h2>User Verification</h2>
      {!isVerified ? (
        <div>
          <p>Verifying your identity...</p>
          <button onClick={handleVerification}>Verify Now</button>
        </div>
      ) : (
        <p>Verified! Redirecting to password reset...</p>
      )}
    </div>
  );
};

export default UserVerification;
