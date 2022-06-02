require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://resume-online-mu.vercel.app',
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
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
app.use(require('./routes/experience'));
app.use(require('./routes/education'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Acessar http://localhost:${port}`));
