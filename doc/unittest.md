# Unit tests

We tested those files, which have the most impact on the site. We used jest, which is the most popular javascript testing tool.

We tested the following: 

- error sending: sendError is used to send different hhtp errors in the backend
    
- http method handler: handler is a higher order finction, which is used to help the backend routing

- user authentication: withUser a helper function, which checks if the user is logged in

- question schema validator: this function validates the incoming questions shape
