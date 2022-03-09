
let request = function() {
    let axios = require("axios"),

    ENDPOINTS = {
        API: "https://disease.sh/v3/covid-19",
        COUNTRY(name) {
            return this.API + `/countries/${name}?strict=true`;
        }
    }

    async function fetch(country) {
        try {
            let response = await axios.get(ENDPOINTS.COUNTRY(country));

            return response;
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetch
    }
};

module.exports = request();
