const express = require('express');

const { ServerConfig, Logger } = require('./config');
// const logger = require('./config/logger-config');

// const serverConfig = require('./config/server-config');

const app = express();

app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, () => {
     console.log(`Successfully started the server on port : ${ServerConfig.PORT}`);
     Logger.info("Suucessfully started the server", {});
})