const express = require('express');
const setupMiddlewares = require('./middlewares');
const { PORT } = require('./config');


const app = express();

setupMiddlewares(app);

app.listen(PORT, () =>
    console.log(`>>> Server running: http://localhost:${PORT}`));
