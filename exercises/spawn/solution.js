const { spawn } = require('child_process');
const echoProcess = spawn('echo', [process.argv[2]]);

echoProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});
