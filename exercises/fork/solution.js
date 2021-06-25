const { fork } = require('child_process');

const forkedProcess = fork(process.argv[2]);

forkedProcess.on('message', (msg) => {
  console.log(msg);
});
