import React, { Component } from 'react';
import classnames from 'classnames'
import complete from './complete.png'
import completeCircle from './complete-circle.png'
import './index.less'

export default class Process extends Component {
  constructor(props) {
    super(props)
    this.state = {
      process: parseInt(this.props.process),
      size: 0
    }
  }

  componentDidMount() {
    let { process } = this.state
    this.circleSize(process)
  }

  handleChangeProcess = (pramas) => {
    let { process } = this.state
    if (pramas === 'reduce' && process > 0) {
      process -= 10
      if (process < 0) process = 0
    }
    if (pramas === 'add' && process < 100) {
      process += 10
      if (process > 100) process = 100
    }
    this.setState({
      process
    }, this.circleSize(process))
  }

  circleSize = (process) => {
    process = process / 100
    let perimeter = Math.PI * 2 * 50
    let size = perimeter * process + " " + perimeter * (1 - process)
    this.setState({
      size
    })
  }

  render() {
    const { process, size } = this.state
    const { type, bgColor, showInfo, action } = this.props
    const style = { width: `${process}%`, backgroundColor: bgColor }
    return (
      <div className='process'>
        {type === 'circle' ? (
          <div className='process--circle'>
            <svg width="120" height="120">
              {
                process === 100 ? (
                  <image href={completeCircle} x='60' y='60' height='30' width='30' transform='translate(-15, -15)' />
                ) : (
                    <text textAnchor="middle" transform="translate(60,65)" className='circle--text'>{process}%</text>
                  )
              }
              <circle cx="60" cy="60" r="50" className='circle--bottom' />
              <circle cx="60" cy="60" r="50" className={`${process === 100 ? 'circle--top circle--top__complete' : 'circle--top'}`} strokeDasharray={`${size}`} />
            </svg>
            {
              action && <div className='process--action'>
                <div className='action--item' onClick={() => this.handleChangeProcess('reduce')}>-</div>
                <div className='action--item' onClick={() => this.handleChangeProcess('add')}>+</div>
              </div>
            }
          </div>
        ) : (
            <div className='process--line'>
              <div className='process--wrapper'>
                <div className='line'>
                  <div className={classnames('line__active', { 'line__complete': process === 100 })} style={style}></div>
                </div>
                <div className='process--info'>
                  {showInfo && process !== 100 && <span className='process--text'>{`${process}%`}</span>}
                  {showInfo && process === 100 && <img src={complete} className='process--text__complete' alt='' />}
                </div>
              </div>
              {
                action && <div className='process--action'>
                  <div className='action--item' onClick={() => this.handleChangeProcess('reduce')}>-</div>
                  <div className='action--item' onClick={() => this.handleChangeProcess('add')}>+</div>
                </div>
              }
            </div>
          )}
      </div>
    )
  }
}