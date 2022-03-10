
let output = function() {
    function printCountrySummary(data) {
        let formattedData = formatDataPoints(data);

        console.log(`
Country: ${data.country}
Last update: ${formattedData.lastUpdate}

Discovered cases today: ${formattedData.casesTodayFormatted}
Deaths today: ${formattedData.deathsTodayFormatted}

Total number of cases: ${formattedData.casesTotalFormatted}
Total number of deaths: ${formattedData.deathsFormatted}

Total active cases: ${formattedData.activeFormatted}
    `)
    }

    function printWorldwideSummary(data) {
        let formattedData = formatDataPoints(data);

        console.log(`
Global statistics
Last update: ${formattedData.lastUpdate}

Discovered cases today: ${formattedData.casesTodayFormatted}
Deaths today: ${formattedData.deathsTodayFormatted}

Total number of cases: ${formattedData.casesTotalFormatted}
Total number of deaths: ${formattedData.deathsFormatted}

Total active cases: ${formattedData.activeFormatted}
    `)
    }

    function formatDataPoints(data) {
        return {
            lastUpdate: new Date(data.updated),
            deathsTodayFormatted: Number(data.todayDeaths).toLocaleString(),
            casesTodayFormatted: Number(data.todayCases).toLocaleString(),
            casesTotalFormatted: Number(data.cases).toLocaleString(),
            deathsFormatted: Number(data.deaths).toLocaleString(),
            activeFormatted: Number(data.active).toLocaleString()
        }
    }

    return {
        printCountrySummary,
        printWorldwideSummary
    }
}

module.exports = output();
