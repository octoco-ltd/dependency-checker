import inquirer from "inquirer";

export const promptForPackage = async (packageInRepo, license) => {
    const {packageAnswer}  = await inquirer.prompt({
        name: "packageAnswer",
        message: `The ${packageInRepo} package uses the ${license} license which is not in our list of allowed licenses  Please check this
        link to ensure that this license is permissive: https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses. Do you want to proceed? (Y/n)`,
        type: "input",
        default: "Y"
    });
    return packageAnswer;
}