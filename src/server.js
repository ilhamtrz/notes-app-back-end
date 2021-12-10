/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-unresolved */
const Hapi = require('@hapi/hapi');
 
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
 
 
  await server.start();

  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();