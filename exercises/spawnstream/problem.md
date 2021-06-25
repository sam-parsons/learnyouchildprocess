# SPAWN-STREAM

It is a philosophy of UNIX systems to develop many applications which are narrow and specialized by nature, connecting them through a common interface. Let's explore how we can use the `spawn` method to create multiple processes and connect their `stdin/err/out` streams.

_Objective_

You will be given an absolute path string as the value of `process.argv[2]`. Using that path, create a child process that executes the `cat` command. `cat` streams the contents of the file to the process' `stdout`. Create another child process by executing the `sort` command. `sort` will nondestructively output organized lines of a file - alphabetically by default. Pipe the output of the `cat` process to the `sort` process, and pipe the output of the `sort` process to the parent process' `stdout`.
