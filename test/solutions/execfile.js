const { execFile } = require('child_process');

execFile('node', ['--version'], (error, stdout, stderr) => {
  console.log(stdout);
});
