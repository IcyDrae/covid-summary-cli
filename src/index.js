const arguments = require("./arguments");
const request = require("./request");

let country = arguments.registerArguments();

if (country !== undefined) {
    showCountrySummary();
} else
    showWorldwideSummary();

function showCountrySummary() {
    request.fetch(country).then((response) => {
        if (response.data) {
            printCountrySummary(response.data);
        }
    }).catch((error) => {
        console.log(error.message);
    });
}

function printCountrySummary(data) {
    let lastUpdate = new Date(data.updated),
        casesTodayFormatted = Number(data.todayCases).toLocaleString(),
        casesTotalFormatted = Number(data.cases).toLocaleString(),
        deathsFormatted = Number(data.deaths).toLocaleString(),
        activeFormatted = Number(data.active).toLocaleString();

    console.log(`
Country: ${data.country}
Last update: ${lastUpdate}

Discovered cases today: ${casesTodayFormatted}
Deaths today: ${data.todayDeaths}

Total number of cases: ${casesTotalFormatted}
Total number of deaths: ${deathsFormatted}

Total active cases: ${activeFormatted}
    `)
}

function showWorldwideSummary() {

}
