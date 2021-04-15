/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns Hello world message
*
* greeting String Name of greeting
* returns Hello
* */
const helloWorldGet = ({ greeting }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        greeting,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Returns Hello world message.
*
* greeting String Name of greeting
* returns Hello
* */
const helloWorldPost = ({ greeting }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        greeting,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  helloWorldGet,
  helloWorldPost,
};
