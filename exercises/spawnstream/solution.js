const { spawn } = require('child_process');
const catProcess = spawn('cat', [process.argv[2]]);
const sortProcess = spawn('sort');

catProcess.stdout.pipe(sortProcess.stdin);
sortProcess.stdout.pipe(process.stdout);
