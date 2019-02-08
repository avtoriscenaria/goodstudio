import React from 'react'

export default class Info extends React.Component {

  render() {
    return (
      <div>
          <p>Категория: {this.props.category}</p>
          <p>Дата: {this.props.date}</p>
      </div>
    );
  }
}