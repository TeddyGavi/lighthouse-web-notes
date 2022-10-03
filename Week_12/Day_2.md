### Lecture
- SQL from our apps
- Express server, using the npm package pg
- allows us to use the pool object to write queries in plain text
- send them to the server and request information via standard queries
- important to consider prevention of an SQL injection attack that could potentially expose all users passwords and emails if not protected against
- one way to prevent this is sanitize the inputs and use parametrized  syntax
- instead of allowing the input from a form to directly get sent to the database
- 