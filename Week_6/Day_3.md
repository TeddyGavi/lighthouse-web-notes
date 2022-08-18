### What is a cookie
- cookies are in the header of a response and in all subsequent requests from the client to the server
- key value pairs
- cookies now serve as an identifier for your local machine
- they reference data that is sorted in a unique id on a server
- third party cookies can be use to target specific ads to a user
- this works by storing a a tracking pixel on a specific ad network server and later on a different request to a different website that is served by that ad network your cookie is then read by that new website and can see the visit to the previous website and then render the new website with the ad embedded on the page
- cookies are domain specific

### working with cookies in express
- can use res.cookie("name", res.body.name)
- if the cookie parser is installed
- we can also extract string data from the cookie with res.cookie.[name]
- this allows us to display information from the stored text in the cookie


### TI breakout
- main points were
  - make the interviewer imagine you doing the job
  - showcase that you are a pleasure to work with
- 5 steps to take after the technical question has been asked
1. Repeat the question to the interviewer
2. ask clarifying questions or any edges cases or other inputs
3. discuss your strategy to solve the problem
4. write the pseudo-code, this can be syntax free solution, write as if you were talking to the computer but also hope to recognize problems and return to step 1 if so.
5. implement the code in whatever language you are being tested in
6. test the code via a whiteboard
  > list variable and update variables as you go along