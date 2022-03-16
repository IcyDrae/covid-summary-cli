![GitHub](https://img.shields.io/github/license/MatrixEternal/covid-summary-cli?style=flat-square)
![GitHub](https://img.shields.io/github/v/release/MatrixEternal/covid-summary-cli?style=flat-square)
![GitHub](https://img.shields.io/github/last-commit/MatrixEternal/covid-summary-cli/main?style=flat-square)

**covid-summary-cli** is a CLI utility that fetches the summary of a country as well as the global summary for the actual day.

## Usage

### ```--help``` or ```-h```
```
covid-summary-cli
A CLI utility that fetches the summary of a country or the global summary for the actual day.
Information includes new cases, new deaths, as well as total confirmed cases, total deaths & total active cases.


Arguments
-h --help      displays this message
--country      the lower-case name of the country in English. Example: 'germany' instead of 'Deutschland', 'uk' instead of 'United Kingdom'.
               Usage example: '--country germany'
```

### no parameter, default behaviour
<img src="https://github.com/MatrixEternal/covid-summary-cli/blob/main/docs/assets/no_parameter.png" alt="No parameter">

### ```--country germany```
<img src="https://github.com/MatrixEternal/covid-summary-cli/blob/main/docs/assets/parameter_country.png" alt="Parameter country">

---

## Installation

There is no need to have npm installed or any other dependencies, instead there are three executables for Windows, macOS and Linux.
Download the executable for your OS from the [releases page](https://github.com/MatrixEternal/covid-cases-cli/releases).

## Dependencies

- Axios HTTP

## Contributing & getting started

If you want to contribute to this project, please refer to [the contributors documentation](docs/CONTRIBUTORS.md).

## License

[GPLv3](LICENSE)
