const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Routes = require('./routes/routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', Routes);

app.listen(3000, () => {
    console.log('Server runnning on port 3000');
});