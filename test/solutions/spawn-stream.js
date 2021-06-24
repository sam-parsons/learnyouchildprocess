const { spawn } = require('child_process');
const cat = spawn('cat', [process.argv[2]]);
const sort = spawn('sort');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(process.stdout);
