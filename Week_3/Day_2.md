### Lecture notes 
- What is a module?
> blocks of encapsulated code that communicate to a external application based on their functioanlity
- use ```require``` this is built into nodejs
- anything that you need to use outside the file is exported with ```module.exports```
> note this always logs an empty object
- we can use the built in assert library to do testing but it isn't the best way
- it is better to use a test runner and a seperate assertion library like mocha and chai
- always run ```npm init``` first
then use ```npm install --save-dev```


### TDD and BDD
- just a recap from yesterdays notes
- TDD require you to write tests first, and to think about the behaviour of the function first before writing any code, in FACT the first test that we write should actually fail, because there is no code written it
- it has many benefits, not the least is introducing fewer bugs, a lot of companies expect this to be the standard of work flow