# CI setup

We created a workflow based on the default GitHub Node workflow, and changed it so that it builds the site and then runs all the tests.

Then for the tests to succeed we added the environmental variables to GitHub as secrets and then loaded them inside the workflow.

Finally we added an enhancement that shows the test results on commits to a pull request, so we can more easily debug failing tests.
