import React, { Component } from 'react'
import Mask from '../Mask'
import rightArrow from './rightArrow.png'
import './index.css'

export default class DropSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      show: false
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleCancel = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleSelect = (item) => {
    this.setState({
      value: item.label,
      show: !this.state.show
    })
  }

  render() {
    const { value, show } = this.state
    const { options, label } = this.props
    return (
      <div className='dropselect'>
        <div className='selectclick' onClick={this.handleClick}>
          {value ? (<span>{value} </span>) : <span style={{ color: '#ccc' }}>请选择</span>}
          <img src={rightArrow} alt=''/>
        </div>
        {
          show && <div>
            <Mask />
            <div className='fixedUl'>
              <div className='choice__item choice__item--label'>{label}</div>
              <div className='choice'>
                {
                  options.map(item => {
                    return <div className='choice__item' key={item.value} onClick={() => this.handleSelect(item)}>{item.label}</div>
                  })
                }
              </div>
              <div className='choice__item choice__item--cancel' onClick={this.handleCancel}>取消</div>
            </div>
          </div>
        }
      </div>
    )
  }
}