import React, { Component } from 'react'
import downArrow from './downArrow.png'
import Toast from '../Toast'
import Mask from '../Mask'
import SelectItem from '../SelectItem'
import './index.less'

export default class LinkageSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstItem: null,
      secondItem: null,
      show: false,
      currOptions: [],
      currClick: ''
    }
  }

  handleClick = (params) => {
    const { secondItem, show, firstItem } = this.state
    const { parent, child } = this.props
    if (params === 'first') {
      this.setState({
        currOptions: parent,
        currClick: 'first'
      })
    }
    if (params === 'second') {
      if (secondItem === null) {
        Toast.error('请选择第一个')
        return 
      } else {
        this.setState({
          currOptions: child[firstItem.value],
          currClick: 'second'
        })
      }
    }
    this.setState({
      show: !show
    })
  }

  handleCancel = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleSelect = (item) => {
    const { child } = this.props
    const { currClick, show } = this.state
    if (currClick === 'first') {
      this.setState({
        firstItem: item,
        secondItem: child[item.value][0]
      })
    } else {
      this.setState({
        secondItem: item
      })
    }
    this.setState({
      show: !show
    })
  }

  render() {
    const { show, currOptions, firstItem, secondItem } = this.state
    return (
      <div className='linkage'>
        <div className='linkage__item' onClick={() => this.handleClick('first')}>
          {firstItem ? (<span className='linkage__text'>{firstItem.label} </span>) : <span className='linkage__text linkage__text--none'>请选择省份</span>}
          <img className='linkage__img' src={downArrow} alt=''/>
        </div>
        <div className='linkage__item' onClick={() => this.handleClick('second')}>
          {secondItem ? (<span className='linkage__text'>{secondItem.label} </span>) : <span className='linkage__text linkage__text--none'>请选择城市</span>}
          <img className='linkage__img' src={downArrow} alt=''/>
        </div>
        {
          show && <React.Fragment>
            <SelectItem options={currOptions} label='' onCancel={this.handleCancel} onSelect={this.handleSelect} />
            <Mask />
          </React.Fragment>
        }
      </div>
    )
  }
}