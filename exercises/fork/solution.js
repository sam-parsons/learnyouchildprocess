const { fork } = require('child_process');
const forkedProcess = fork(process.argv[2]);

forkedProcess.on('message', (m) => {
  console.log(m);
});
