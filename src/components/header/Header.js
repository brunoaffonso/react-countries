import React, { Component } from 'react';

export default class Header extends Component {
  handleInput = (event) => {
    const newFilter = event.target.value;
    this.props.onChangeFilter(newFilter);
  };

  render() {
    const { filter } = this.props;
    return (
      <div>
        <input type="text" value={filter} onChange={this.handleInput} />
        <span>| Países</span>
        <span>| População</span>
      </div>
    );
  }
}
