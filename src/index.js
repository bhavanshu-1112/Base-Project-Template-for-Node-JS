const express = require('express');

// const { Logger } = require('./config');
// const logger = require('./config/logger-config');
const apiRoutes = require('./routes');
PORT=3000


// const serverConfig = require('./config/server-config');

const app = express();

app.use('/api', apiRoutes);


app.listen(PORT, () => {
     console.log(`Successfully started the server on port : ${PORT}`);
     //Logger.info("Sucessfully started the server", {msg: "something"});
})