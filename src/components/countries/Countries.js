import React, { Component } from 'react';
import Country from './Country';

import css from './country.module.css';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className={css.flex}>
        {countries.map((country) => {
          return (
            <div key={country.id}>
              <Country country={country} />
            </div>
          );
        })}
      </div>
    );
  }
}
