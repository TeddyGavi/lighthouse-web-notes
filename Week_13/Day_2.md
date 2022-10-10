### Sub-queries

- if a query returns a single value then we can use it in the select sub query, the syntax essentially involves wrapping brackets around the original query you can to preserve
- you can also modify the SELECT to form a data source for another select statement, like select a sub table from a certain data set
- SELECT * FROM (
  SELECT something_id
  FROM someTable
  WHERE something
) as sub_table;
- we can use a search result within a WHERE clause when you use NOT IN or IN to select for non matching or matching criteria
- 
