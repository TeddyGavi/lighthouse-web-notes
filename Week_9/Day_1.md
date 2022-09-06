### XSS
- cross site scripting!
- its bad!
- if not accounted for users could enter script tags into forms that append or prepend data to the html document and cause major issues
- if you added 
- ``` <script>
  $("body").empty(); </script>
  ```
- as an example it would render all future content on the site as useless as the entire body would be emptied. 
- an attack of code injections
