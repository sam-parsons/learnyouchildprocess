# EXECFILE

The `execFile` method is very similar to `exec`, useful for executing commands that don't require a shell. Without a shell, you can't access path variables or pipe data from one terminal command to another. You can think of it like a combination of `exec`'s ability to buffer outputs into a callback function and `spawn`'s efficiency of running with out a shell.

_Objective_

If you see this text, it means that you executed `learnyouchildprocesses` with Node in some way. Using the `execFile` method, create a process that outputs the version of Node you are using - hint: you will call the `node` terminal command with a flag. `console.log` the `stdout` of the child process when it completes.
