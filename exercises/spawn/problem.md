# SPAWN

It is highly recommended you are familiar with streams before attempting any exercises in `learnyouchildprocesses`. Check out `learnyounode` and `stream-adventure` to brush up on the basic of Node and streams.

Node's `child_process` module exposes four main methods for creating and manipulating child processes - `spawn`, `exec`, `execFile`, and `fork`. We will explore the `spawn` method in this exercise.

`spawn` create a new process using a given command, with command-line arguments in args. If omitted, args defaults to an empty array. The return value of `spawn` is an instance of `ChildProcess`, which is a stream built on top of the `EventEmitter` class. We can set listeners for data coming from the child process' `stdout` and `stderr`.

_Objective_

You will be given a value though `process.argv[2]`. Create a new child process with `spawn` and use the `echo` command to print the value from `process.argv[2]` to the child process' `stdout`. Log the `stdout` data events on the child process instance in the parent.
