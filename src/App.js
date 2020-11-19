import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

import { numberFormatter } from './helpers/helper';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: '',
      totalPopulation: '',
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
        currencies,
      }) => {
        return {
          id: numericCode,
          name: translations.br,
          nameLowerCase: translations.br.toLowerCase(),
          flag,
          population,
          capital,
          region,
          language: languages[0].name,
          callingCodes: callingCodes[0],
          alpha3Code,
          currencies: currencies[0].name,
        };
      }
    );

    const totalPopulation = this.countPopulation(mappedCountries);

    this.setState({
      allCountries: mappedCountries,
      filteredCountries: mappedCountries,
      totalPopulation,
    });
  }

  countPopulation = (countries) => {
    const totalPopulation = countries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0);
    return totalPopulation;
  };

  handleChangeFilter = (newFilter) => {
    this.setState({
      filter: newFilter,
    });
    const filterLowerCase = newFilter.toLowerCase();

    const res = this.state.allCountries.filter((countries) => {
      return countries.nameLowerCase.includes(filterLowerCase);
    });

    const population = this.countPopulation(res);

    this.setState({
      filteredCountries: res,
      totalPopulation: population,
    });
  };

  render() {
    const { filter, filteredCountries, totalPopulation } = this.state;
    return (
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>React Countries</h2>
        <Header
          filter={filter}
          onChangeFilter={this.handleChangeFilter}
          countCountries={filteredCountries.length}
          population={numberFormatter(totalPopulation)}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
