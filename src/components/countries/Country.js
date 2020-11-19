import React, { Component } from 'react';

import css from './country.module.css';

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className={css.card}>
        <div className={css.cardTittle}>
          <div>
            {country.name} - {country.alpha3Code}
          </div>
        </div>
        <div className={css.cardContent}>
          <img className={css.img} src={country.flag} alt="" />
          <ul>
            <li>
              Capital: <strong>{country.capital}</strong>
            </li>
            <li>
              Idimoa: <strong>{country.language}</strong>
            </li>
            <li>
              Código DDI: <strong>{country.callingCodes}</strong>
            </li>
            <li>
              Moeda: <strong>{country.currencies}</strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
