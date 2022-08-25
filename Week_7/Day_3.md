### Passwords
- hashing versus encrypting 
- encrypting can be reversed and should never be used to store passwords
- hashing is a one way process and cannot be reversed
- in order to check the enter password meets the password entered we hash the entered password and compare it against the stored hash
- 

### Secure cookies and sessions
- session can mean a variety of things


1. session cookies - cookies that expire after a browser is closed
2. user session - login/logout features on a site
3. user session - the event of a user using an application
4. session - encrypted cookies
5. session - abstraction that refers to user data, can be tracked in various ways:
    - storing data in an encrypted cookies
    - storing an id in an encrypted cookie with a session store on the server-side


#### Plain test cookies are **NOT** secure
- since cookies are used to validate a user is who they say they are if the cookie is stored as plain text it is very easy to modify
- encrypted cookies are one of the answers.


- need to review? what is the difference between HTTP response Body and response Header?
- 

### CRUD to BREAD and rest
- rest is REpresentational State Transfer
- all servers will CRUD in a standard format
- basically a way to structure the urls so that they correspond with CRUD operations in a standard way
- BREAD is browse, read, edit, add, delete
- a popular convention for structuring routes in web apps
- 