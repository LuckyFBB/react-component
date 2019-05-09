import React, { Component } from 'react';
import classnames from 'classnames'
import './index.less';

export default class RadioButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  
  handleClick = (item) => {
    const value = item.value
    this.setState({
      value
    })
  }

  render() {
    const { options } = this.props
    const { value } = this.state
    return (
      <div className='button'>
        {
          options.map(item => {
            return (
              <div className={classnames('button__item', value === item.value && 'button__item--checked')} key={item.value} onClick={() => this.handleClick(item)}>{item.label}</div>
            )
          })
        }
      </div>
    )
  }
}