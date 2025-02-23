const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Server is running!' });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the CI/CD Web Server!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
