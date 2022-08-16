### What is encoding?
- a way to display a string 
- unicode assigns a given set of numbers to a associated byte in memory
- this allows many different characters and symbols to be expressed accurately across the internet!


### cURL
- this serves as a way to download content from a webpage via the cli
- 

### DNS
- domain name server
- fetches IP addresses 
- the lookup process goes as the following, browser queries the local cache, then looks to the resolving name server, the resolving name server then goes to the ROOT name servers, then TLD servers, if it is not found there we go to the ANS servers (authoritative name servers), resolving name servers keeps the ip address in cache and then tells the browser to go that specific address
- record types:
  - A - most common hosts IPv4 address
  - NS - name server that is responsible for DNS zone
  - MX - mail exchange, specifies where email goes
  - CNAME - canonical name, an alias for a hostname
  - AAAA - IPV6 address

### HTTP request methods
- a safe request these have no indented effect on the server, indented to be read only
- a idempotent request is multiple identical requests with that method have the same effect as a single such request
- a good example here is PUT and DELETE, is a user is trying to delete a user that already is deleted, the delete request will have no effect 
- if PUT is set to modify a email address then the request to modified the email address to the same exact address should have no effect 