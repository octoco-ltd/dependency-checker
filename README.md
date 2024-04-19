# dependency-checker
This is Octoco's dependency license checker. It is used to check the licenses of all the dependencies and their dependencies in our NodeJS projects.

To add the CLI run `npm install -g git+https://github.com/octoco-ltd/dependency-checker`

This can be done in your CI/CD pipeline or on your local machine. It will determine all the list of licenses that your dependencies use and raise an error if any of those license are restrictive or copyleft.

For any queries contact `james@octoco.ltd`