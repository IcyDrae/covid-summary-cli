
let arguments = function() {
    let commandLineArguments = process.argv.slice(2);

    function registerArguments() {
        handleArgumentWithoutValue();
        registerArgumentsHelp();

        if (registerArgumentCountry())
            return commandLineArguments[1];

        function handleArgumentWithoutValue() {
            if (commandLineArguments[0] === "--country" && commandLineArguments[1] === undefined) {
                console.log("Argument '--country' expects a value.");
                process.exit(1);
            }
        }

        function registerArgumentsHelp() {
            if ((commandLineArguments[0] === "--help" || commandLineArguments[0] === "-h") &&
                commandLineArguments[1] === undefined) {
                printHelp();
                process.exit();
            }
        }

        function registerArgumentCountry() {
            if(commandLineArguments[0] === "--country" && commandLineArguments[1] !== undefined) {
                return true;
            }
        }
    }

    function printHelp() {
        console.log("\n");
        console.log("covid-cases-cli");
        console.log("A CLI utility that fetches the summary of a country for the actual day. \n" +
            "Information includes new cases, new deaths, as well as total confirmed cases & total deaths.");
        console.log("\n");
        console.log("Arguments");
        console.log("-h --help      displays this message");
        console.log("--country      the lower-case name of the country in English. Example: 'germany' instead of 'Deutschland', 'united-kingdom' instead of 'United Kingdom'. \n" +
                    "               Usage example: '--country=germany'");
    }

    return {
        registerArguments
    }
}

module.exports = arguments();
