### MORE DATABASE Design
- fist normal form
- no repeating values
- no rows containing multiple keys
- The foreign key is on the many side. The foreign key is on the many side. The foreign key is on the many side.
- There are no direct many to many relationships
- only multiple one to many relationships
- Its very important to model the database with an ERD before beginning any code
- need to ask yourself important questions about how to store the data.
  - do we need one to many? many to many?
  - do we want to create an PK for a joining table
  - how many entities do we need?
  - are we creating a store, a class list, a pet list, each of these will have different requirements
  - ultimately there is no right or wrong, it will depend on the importance of each entity as determined by who you are working with.
  

### some conventions on naming
- use snake_case
- plural table names,
- single column names
- call your primary key id
- for foreign tables call the FK <table>_id

### SQL
- DDL stands for data definition language 
- common language for interacting with a DB
- CREATE, ALTER, DROP
> use CREATE to create table, data types must be specified
> use ALTER, and ADD COLUMN to add new data keys into a existing tale
> DROP is for deleting, delete on CASCADE will delete all records from other tables that depend on the current table

### DATA types are important
- we have to much more specific about what DATA type we are using when working with databases PostgresQL has a large variety of DATA types, important to keep it simple, and to no use user create DATA types
- another good rule of thumb is to limit the data you are representing ie, we don't want to keep dates as long strings with formatted suffixes or we wouldn't want to store money as a values converted from anything other then cents, 
> leave these formatting concerns up to the front-end/back-end
- much better to simply store the number or the DATE as a ISO 8601 standard yyyy-mm-dd or currency as a int values with cents
