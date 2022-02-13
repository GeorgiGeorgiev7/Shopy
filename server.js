const express = require('express');
const setupMiddlewares = require('./util/middlewares');
const { PORT } = require('./util/config');


const app = express();

setupMiddlewares(app);

app.listen(PORT, () =>
    console.log(`>>> Server running: http://localhost:${PORT}`));
