import React, { Component } from 'react';

class FilterSelect extends Component {

  render() {
    const { name, label, value, options, onChange } = this.props;
    return (
      <select
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select {label}</option>
        {options.map(option => (
          <option key={option._id} value={option.slug}>{option.name}</option>
        ))}
      </select>
    )
  }
}

export default FilterSelect;
