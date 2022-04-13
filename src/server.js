require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./database/index');

// Routes
const userRoutes = require('./routes/user');
const authenticateRoutes = require('./routes/authenticate');

app.use(userRoutes);
app.use(authenticateRoutes);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`Acessar http://localhost:${port}`));
