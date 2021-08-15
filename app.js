const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Chris, Welcome to AWS and the beginning of your machine learning in production journey!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
