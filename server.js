const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});