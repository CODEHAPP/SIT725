const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory (e.g., index.html)
app.use(express.static('public'));

// Addition service: GET /add?num1=1&num2=2
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate that both query parameters are numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Invalid numbers');
    }

    // Perform addition and return the result
    const result = num1 + num2;
    res.send(`Result: ${result}`);
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
