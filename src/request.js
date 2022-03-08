
let request = function() {
    let axios = require("axios"),

    ENDPOINTS = {
        API: "https://api.covid19api.com",
        get BY_COUNTRY_LIVE() {
            return this.API + "/summary";
        }
    }

    async function fetch() {
        try {
            let response = await axios.get(ENDPOINTS.BY_COUNTRY_LIVE);

            let summary = response.data.Countries.filter((country) => {
                return country.CountryCode === "DE";
            });

            return summary;
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetch
    }
};

module.exports = request();
