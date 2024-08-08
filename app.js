const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey there this is aashi saxena, nice to meet you!!,, blah blah blha message has been changed for testing, yaaayyy!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
