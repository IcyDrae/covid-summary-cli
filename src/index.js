const arguments = require("./arguments");
const request = require("./request");
const output = require("./output");

let country = arguments.registerArguments();

if (country !== undefined)
    getCountrySummary();
else
    getWorldwideSummary();

function getCountrySummary() {
    request.fetchCountry(country).then((response) => {
        if (response.data) {
            output.printCountrySummary(response.data);
        }
    }).catch((error) => {
        console.log(error.message);
    });
}

function getWorldwideSummary() {
    request.fetchAll().then((response) => {
        if (response.data) {
            output.printWorldwideSummary(response.data);
        }
    }).catch((error) => {
        console.log(error.message);
    });
}
