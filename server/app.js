const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
	console.log('Server running on port ', port);
});
