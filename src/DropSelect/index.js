import React, { Component } from 'react'
import Mask from '../Mask'
import rightArrow from './rightArrow.png'
import SelectItem from '../SelectItem';
import './index.less'

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
          <img src={rightArrow} alt='' />
        </div>
        {
          show && <React.Fragment>
            <SelectItem options={options} label={label} onCancel={this.handleCancel} onSelect={this.handleSelect} />
            <Mask />
          </React.Fragment>
        }
      </div>
    )
  }
}