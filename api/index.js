// Vercel serverless function wrapper for Express app
const app = require('../server.js');

// Export handler for Vercel serverless functions
// The Express app already has CORS middleware configured
module.exports = app;

