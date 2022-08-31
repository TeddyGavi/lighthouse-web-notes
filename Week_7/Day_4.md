### Lecture with Bryan on security and authentication

- it is not a good idea to store passwords in plaintext
> many reasons but probably the biggest is now the passwords are easily accessible to anyone viewing the json data
- use bcrypt to hash passwords and store the actual passwords in a separate .env file and send the hashed passwords to the DB
- cookies are visible in the inspect tools, you can copy and past cookies and change the values to pretend to be any user and then gain access to information you shouldn't have access to.
> the solution is to use secure cookies

- HTTP is plain text
- very easy to intercept the data when using a non secured network
- HTTPS which sends data secured is the only way to prevent this 
- this is known as end-to-end encrypting 

### REST
- representational state transfer
- this is a pattern that we should adhere to when assign http verbs to routes and to requests 
- there are no states to communication
- resource information must be part of the URL

- we have  GET, POST, PUT, DELETE as basic HTTP verbs
- these are restful, you need to use method override to accomplish this when working with express
- middleware!