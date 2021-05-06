# UI tests

We tested the main components of the site, with jest-playwright testing tools.

We tested the following:

## User login flow

First we check if an unauthorized person can access the pages which needs authorization. Then we check if the login was successful and the proper cookie values were saved.

In the last test we check if logged in users do not have to log in again.

## Question flow

First we check if a logged in user can post a question. Next we check if the posted question can be edited. Then we test if the built in searching feature works correctly. In the last test we check if a user can delete the posted question.