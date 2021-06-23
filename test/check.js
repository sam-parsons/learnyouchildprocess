const spawn = require('child_process').spawn;
const path = require('path');
const test = require('tape');

const adventures = require('../exercises/menu.json');
adventures.forEach(function (name) {
  test(name, function (t) {
    t.plan(2);
    const file = name.toLowerCase().replace(/\s+/g, '_') + '.js';
    const solution = path.join(__dirname, 'solutions', file);

    const ps = run(['select', name]);
    ps.on('exit', selected);
    ps.stderr.pipe(process.stderr);

    function selected(code) {
      t.equal(code, 0);
      const ps = run(['verify', solution]);
      ps.on('exit', verified);
      ps.stderr.pipe(process.stderr);
    }

    function verified(code) {
      t.equal(code, 0);
    }
  });
});

function run(args) {
  args.unshift(path.join(__dirname, '../bin/cmd.js'));
  return spawn(process.execPath, args);
}
