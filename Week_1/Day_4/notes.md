### Debugging:
- look at the first few lines of the output, often it'll say syntax error
- also usually lists where the error happened, ie, {filename} line 4
- the last bit of the message is called stack trace
> shows the state of our program when the error occurred
- general rule of thumb is to read the error message closely and to look at the suspicious lines of code closely for syntax errors or typos or misspelled words

### Truthy and Falsey
- What are the the falsey values
> Flase, 0, "", null, undefined, NaN
- Implicit type conversion, this is when we don't use strict equals to compare two values and JS tries to convert the values into the same type as well as value