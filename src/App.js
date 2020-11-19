import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: '',
      countries: [],
    };
  }

  async componentDidMount() {
    const countries = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await countries.json();

    const mappedCountries = json.map(
      ({
        numericCode,
        translations,
        flag,
        population,
        capital,
        region,
        languages,
        callingCodes,
        alpha3Code,
      }) => {
        return {
          id: numericCode,
          name: translations.br,
          flag,
          population,
          capital,
          region,
          language: languages[0].iso639_1,
          callingCodes: callingCodes[0],
          alpha3Code,
        };
      }
    );

    this.setState({
      allCountries: mappedCountries,
      filteredCountries: mappedCountries,
    });
  }

  handleChangeFilter = (newFilter) => {
    console.log(newFilter);
    this.setState({
      filter: newFilter,
    });
  };

  render() {
    const { allCountries, filter } = this.state;
    return (
      <div>
        <h3>React Countries</h3>
        <Header filter={filter} onChangeFilter={this.handleChangeFilter} />
        <Countries countries={allCountries} />
      </div>
    );
  }
}
