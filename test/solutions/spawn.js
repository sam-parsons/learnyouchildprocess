const { spawn } = require('child_process');
const ls = spawn('echo', [process.argv[2]]);

ls.stdout.on('data', (data) => {
  console.log(data.toString());
});
