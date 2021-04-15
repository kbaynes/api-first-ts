
// const express = require('express');
// const fs = require('fs');
// const jsyaml = require('js-yaml');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server is listening on ${port}`)
// })

// app.get('/test', (req: any, res: any) => {
//   res.send('Test World!');
// });

const config = require('./config/config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');

const launchServer = async () => {
  let expressServer;
  try {
    expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error('Express Server failure', error.message);
    await close();
  }
};

launchServer().catch(e => logger.error(e));