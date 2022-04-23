require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./database/index');

// Routes
app.use(require('./routes/user'));
app.use(require('./routes/authenticate'));
app.use(require('./routes/resume'));
app.use(require('./routes/profile'));
app.use(require('./routes/photo'));
app.use(require('./routes/about'));
app.use(require('./routes/skill'));

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`Acessar http://localhost:${port}`));
