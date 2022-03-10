
let request = function() {
    let axios = require("axios"),

    ENDPOINTS = {
        API: "https://disease.sh/v3/covid-19",
        get ALL() {
            return this.API + "/all";
        },
        COUNTRY(name) {
            return this.API + `/countries/${name}?strict=true`;
        }
    }

    async function fetchAll() {
        return await axios.get(ENDPOINTS.ALL);
    }

    async function fetchCountry(name) {
        return await axios.get(ENDPOINTS.COUNTRY(name));
    }

    return {
        fetchAll,
        fetchCountry
    }
};

module.exports = request();
