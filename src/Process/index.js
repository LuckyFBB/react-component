import React, { Component } from 'react';
import classnames from 'classnames'
import complete from './complete.png'
import './index.css'

export default class Process extends Component {
  constructor(props) {
    super(props)
    this.state = {
      process: parseInt(this.props.process)
    }
  }

  handleChangeProcess = (pramas) => {
    let { process } = this.state
    if (pramas === 'reduce' && process !== 0) {
      process -= 10
    } 
    if (pramas === 'add' && process !== 100) {
      process += 10
    }
    this.setState({
      process
    })
  }

  render() {
    const { process } = this.state
    const { type, bgColor, showInfo, action } = this.props
    const style = { width: `${process}%`, backgroundColor: bgColor }
    return (
      <React.Fragment>
        <div className='process'>
          {type === 'circle' ? (
            <div className='process--circle'></div>
          ) : (
              <div className='process--wrapper'>
                <div className='process--line'>
                  <div className={classnames('process--line__active', { 'process--line__complete': process === 100 })} style={style}></div>
                </div>
                <div className='process--info'>
                  {showInfo && process !== 100 && <span className='process--text'>{`${process}%`}</span>}
                  {showInfo && process === 100 && <img src={complete} className='process--text__complete' />}
                </div>
              </div>
            )}
          {action && <div className='process--action'>
            <div className='action--item' onClick={() => this.handleChangeProcess('reduce')}>-</div>
            <div className='action--item' onClick={() => this.handleChangeProcess('add')}>+</div>
          </div>
          }
        </div>
      </React.Fragment>
    )
  }
}