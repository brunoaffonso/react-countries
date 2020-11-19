import React, { Component } from 'react';

import css from './header.module.css';

export default class Header extends Component {
  handleInput = (event) => {
    const newFilter = event.target.value;
    this.props.onChangeFilter(newFilter);
  };

  render() {
    const { filter, countCountries, population } = this.props;
    return (
      <div className={css.header}>
        <input
          style={{ width: '400px' }}
          type="text"
          value={filter}
          onChange={this.handleInput}
        />
        <span className={css.country}>
          | Países: <strong>{countCountries}</strong>
        </span>
        <span className={css.population}>
          | População: <strong>{population}</strong>
        </span>
      </div>
    );
  }
}
