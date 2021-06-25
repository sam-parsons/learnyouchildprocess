# EXEC

The `exec` method is very similar to the `spawn` method - in fact, `exec` extends the functionality of `spawn`. Let's explore some pertinent differences.

The most important difference is that `exec` abstracts away the need to use streams to monitor the output of the child process. Instead of streams, `exec` takes in a callback that has three parameters, `error`, `stdout`, `stderr` - the last two represent a buffered version of the child process' output. This feature makes `exec` especially handy for short-lived processes with minimal output (200kb max), and conversely `spawn` is useful for long-lived processes with large amounts of child process input/output.

`exec` also creates a subshell when `spawn` does not, a small difference where `exec` provides us the ability to pipe outputs into inputs of serial BASH commands, among other capabilities of using a shell. This will allow us to execute a command like `echo "hello world" > index.txt` in Node.

_Objective_

You will be provided an absolute path to a file as the value of `process.argv[2]`. Using the `exec` method, call the `cat` terminal command with the file path as the argument. `cat` will print the contents of the file to stdout. However, instead of that, take the ouput of `cat` and pipe it to the `wc` terminal command, which will return a word count of the input. These two steps should be composed into a single command string with a UNIX pipe command. When the process is finished, `console.log` the `stdout` from the child process.
