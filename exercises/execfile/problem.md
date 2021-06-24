# EXECFILE

...doesn't spawn subshell, no access to PATH variables or ability to pipe data from one process to another

is that unlike spawn() which returns a bunch of streams, execFile() will parse the streams and will return the result directly as a string:

_Objective_
