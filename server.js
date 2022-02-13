const express = require('express');

const setupMiddlewares = require('./util/middlewares');


const PORT = 5000;
const app = express();

setupMiddlewares(app);

app.listen(PORT, () =>
    console.log(`>>> Server running: http://localhost:${PORT}`));
