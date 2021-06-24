# FORK

The `fork` method is a specialization of the `spawn` method. It's first argument is a path to a module and will execute the file with Node. `fork` is similar to `spawn` because there is a communication channel between the parent and child processes. While `spawn` uses `stdin/out/err` streams, `fork` uses a special, but simple inter-process communication API. Both the parent and child processes can listen for `message` events on each other and use the `send` method to push JSON/XML messages on their respective global `process` objects.

The message-based inter-process communication API is great for simple exchange of messages to trigger custom events. However, if the input or output of the child process is supposed to be large, like image/video processing, it is recommended to stick with the streaming interface of `spawn`.

_Objective_

You will be given an absolute file path to the following Node module as the value of `process.argv[2]`.

```js
function addTwo() {
  return 2 + 2;
}

process.send(addTwo());
```

Using the `fork` method, invoke the module and listen for `message` events on the child process. `console.log` the data of the message.
