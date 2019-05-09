import React, { Component } from 'react';
import classnames from 'classnames'
import './index.less';
import Toast from '../Toast';

export default class CheckBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: []
    }
  }

  handleClick = (item) => {
    const clickValue = item.value
    const { values } = this.state
    const { maxLength } = this.props
    let newValues = [...values]    //储存已存在的值

    if (values.includes(clickValue)) {   //当前已经选中该值
      newValues = values.filter(val => val !== clickValue)
    } else if (values.length < maxLength) {   //在没有选择这个值并且数量小于最大的选择值
      newValues.push(clickValue)
    } else {       //数量大于最大值
      Toast.loading(`最多可选${maxLength}项`, 1500)
    }

    this.setState({
      values: newValues
    })
  }

  render() {
    const { options } = this.props
    const { values } = this.state
    return (
      <div className='checkbox'>
        {
          options.map(item => {
            return (
              <div className={classnames('checkbox__item', values.includes(item.value) && 'checkbox__item--checked')}
                key={item.value}
                onClick={() => this.handleClick(item)}>
                {item.label}
              </div>
            )
          })
        }
      </div>
    )
  }
}