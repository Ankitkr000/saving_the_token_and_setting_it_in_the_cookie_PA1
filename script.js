const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';

const encrypt = (payload) => {
  try {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  } catch (error) {
    console.error('Token generation failed:', error.message);
    return null;
  }
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
};

// Test the implementation
const testPayload = { userId: 123, username: 'testuser' };
const token = encrypt(testPayload);

if (token) {
  const decoded = decrypt(token);
  if (decoded && decoded.userId === testPayload.userId) {
    console.log('Success: Token encryption and decryption working correctly ,'Token : ${token});
  } else {
    console.log('Error: Token verification failed');
  }
} else {
  console.log('Error: Token generation failed');
}

module.exports = {
  encrypt,
  decrypt
}