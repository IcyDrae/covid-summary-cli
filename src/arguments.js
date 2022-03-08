
let arguments = function() {
    let commandLineArguments = process.argv.slice(2),
        acceptedArguments = [
            "-h",
            "--help",
            "--country"
        ];

    function processArguments() {
        if (!hasUnknownArguments()) {
            registerArguments();
        }
    }

    function hasUnknownArguments() {
        for (const argument of commandLineArguments) {
            if (!acceptedArguments.includes(argument)) {
                console.log(`Unrecognized argument '${argument}'. Expected one of '${acceptedArguments}'`);
                process.exit(1);
            }
        }

        return false;
    }

    function registerArguments() {
        registerHelpArguments();

        function registerHelpArguments() {
            if ((commandLineArguments[0] === "--help" || commandLineArguments[0] === "-h") &&
                commandLineArguments[1] === undefined) {
                printHelp();
                process.exit();
            }
        }
    }

    function printHelp() {
        console.log("\n");
        console.log("covid-cases-cli");
        console.log("A CLI utility that fetches the summary of a country for the actual day and updates the results every 5 hours, while it keeps running. \n" +
            "Information includes new cases, new deaths, as well as total confirmed cases & total deaths.");
        console.log("\n");
        console.log("Arguments");
        console.log("-h --help      displays this message");
        console.log("--country      the lower-case name of the country in English. Example: 'germany' instead of 'Deutschland', 'united-kingdom' instead of 'United Kingdom'. \n" +
                    "               Usage example: '--country=germany'");
    }

    return {
        processArguments
    }
}

module.exports = arguments();
