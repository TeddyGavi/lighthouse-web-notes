### HTTP errors

- Status errors
  - 200 "everything is good"
  - 201 "success but a new resource has been created"
  - 404 "resource not found"
  - 500 "server had an error"

- response body may contain HTML, JSON or many other types of data. 
- 

### Notes from lecture
- IPv4 is 32 bit based
- IPv6 is 128 bit based
  - many more possible combinations for unique ID

- HTTP is an app build on top of TCP
- it uses a request and response method for transmitting data
- HTTP Methods
 - GET - read or 'get' some data
 - POST - create some new data 
 - PUT/PATCH - edit data
 - DELETE - delete existing data (without method override use post)
 - HEAD

- CRUD apps, this is: 
  - create
  - read
  - update
  - delete