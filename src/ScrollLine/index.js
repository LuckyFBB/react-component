import React from 'react'
import './index.less'
export default class ScrollLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endX: 0
    }
  }

  touchMove = (event) => {
    const touch = event.changedTouches[0]
    let endX = touch.clientX
    console.log(endX)
    endX = endX < 0 ? 0 : endX
    endX = endX > 365 ? 350 : endX
    this.setState({
      endX
    })
  }

  render() {
    const { endX } = this.state
    console.log(endX)
    return (
      <div className='scroll'>
        <div className='scroll__line' onTouchMove={this.touchMove} >
          <div className='scroll__circle' style={{ left: endX }}></div>
        </div>
      </div>
    )
  }
}