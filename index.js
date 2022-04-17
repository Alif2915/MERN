const express = require('express');

const app = express();

const port = 3000;

app.listen(() => {
    console.log(`this server runing on port ${port}`);
})