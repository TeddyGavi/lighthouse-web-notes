### Ruby on Rails as a MVC

- Model View Controller is a popular software development architecture
- Model is central component of the app and it provides a dynamic data structure independent of user interface
  - basically this is the database or rather the representation of the db
  - this is going to be done via ORM and Active Record
- View is a representation of information typically provide by html templates
  - typically views are meant to be general-purpose and composable, and a one to one relationship with a controller action
  - usually dynamic data is displayed here
- Controllers accepts input and converts it into commands for the model or view
