# dependency-checker
This is Octoco's dependecy license checker. It runs through the license of all the modules used in your repository and will highlight any non permissive licenses. For more information on the different license visit [this](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses) link.

If any of the licenses in your project are not in our list you will be prompted to continue or not. This tool is therefor better suited for local testing and not for a CI/CD pipeline.

## Installation
The CLI tool can be installed globally using `npm install -g git+https://github.com/octoco-ltd/dependency-checker.git`.

## Usage
To run the dependency checker CD into the directory of your app to the level of the `package.json`. In your terminal run `npx dependency-checker`. You will be prompted if any erroneous licenses are found and a LICENSE file will be created if it does not already exists in you repository. You need to run the dependency checker for each directory containing a `package.json` file
 