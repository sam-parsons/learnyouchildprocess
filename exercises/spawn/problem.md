# SPAWN

It is highly recommended you are familiar with streams before attempting any exercises in `learnyouchildprocess`. Check out `learnyounode` and `stream-adventure` to brush up on the basic of Node and streams.

Node's `child_process` module exposes four main methods for creating and manipulating child processes - `spawn`, `exec`, `execFile`, and `fork`. We will explore the `spawn` method in this exercise.

`spawn` create a new process using a given command, with command-line arguments in args. If omitted, args defaults to an empty array.

```js
const spawn = require('spawn');

const echoProcess = spawn('echo', ['"hello world"', '>', 'index.txt']);
```

The return value of `spawn` is an instance of `ChildProcess`, which is an object that exposes streams with the properties `stdin`, `stdout`, `stderr`.

```js
const spawn = require('spawn');
const lsProcess = spawn('ls');

assert.ok(typeof lsProcess.stdout.pipe === 'function');
assert.ok(typeof lsProcess.stdout.on === 'function');
```

We can also set listeners for data coming from the child process' `stdout` and `stderr` streams. We can pipe data into the child process through the `stdin` stream. This allows us to create IO pipelines between multiple processes.

_Objective_

You will be given a value though `process.argv[2]`. Create a new child process with `spawn` and use the `echo` terminal command to print the value from `process.argv[2]` to the child process' `stdout`. `console.log` the `stdout` data from the child process instance in the parent.
