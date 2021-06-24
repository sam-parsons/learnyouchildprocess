const { exec } = require('child_process');

exec(`cat ${process.argv[2]} | wc`, (err, stdout, stderr) => {
  console.log(stdout);
});
