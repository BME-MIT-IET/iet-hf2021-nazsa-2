# Unit tests

We tested the files, which have the most impact on the site. We used jest, which is the most popular javascript testing tool.

We tested the following: 

- error sending: sendError is used to send different http errors in the backend
    
- http method handler: handler is a higher order function, which is used to help the backend routing

- user authentication: withUser is a helper function, which checks if the user is logged in

- question schema validator: this function validates the incoming questions shape
