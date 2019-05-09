import React, { Component } from 'react'

export default class Toast extends Component {
  constructor() {
    super()
    this.transitionTime = 300
    this.state = { notices: [] }
  }

  //获取当前notice的key
  getNoticeKey = () => {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  //添加notice
  addNotice = (notice) => {
    const { notices } = this.state
    notice.key = this.getNoticeKey()
    notices[0] = notice  //仅展示最后一个提示
    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => { this.removeNotice(notice.key) }
  }

  //删除当前notice
  removeNotice = (key) => {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      })
    })
  }

  render() {
    const { notices } = this.state
    const icons = {
      info: 'toast__info',
      success: 'toast__success',
      error: 'toast__error',
      loading: 'toast__loading'
    } 
    return (
      <div className="toast">
        {
          notices.map(notice => {
            return (
              <div className="toast__bg" key={notice.key}>
                <div className='toast__box'>
                  <div className={`toast__icon ${icons[notice.type]}`}></div>
                  <div className='toast__text'>{notice.content}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
