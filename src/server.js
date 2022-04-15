require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./database/index');

// Routes
app.use(require('./routes/user'));
app.use(require('./routes/authenticate'));

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`Acessar http://localhost:${port}`));
