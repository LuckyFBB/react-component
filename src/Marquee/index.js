import React, { Component } from 'react';
import classnames from 'classnames'
import './index.css';

export default class MArquee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentText: this.randomText(),
      nextText: '',
      beforeNext: false
    }
  }

  componentDidMount() {
    const _this = this
    this.timer = setInterval(() => {
      _this.startAnimate()
    }, 1500)
  }

  randomText = () => {
    const name = '赵|钱|孙|李|周|吴|郑|王|冯|陈|楮|卫|蒋|沈|韩|杨|朱|秦|尤|许|何|吕|施|张|孔|曹|严|华|金|魏|陶|姜|戚|谢|邹|喻|柏|水|窦|章|云|苏|潘|葛|奚|范|彭|郎|鲁|韦|昌|马|苗|凤|花|方|俞|任|袁|柳|酆|鲍|史|唐|费|廉|岑|薛|雷|贺|倪|汤|滕|殷|罗|毕|郝|邬|安|常|乐'.split('|')
    return `${name[parseInt((Math.random() * name.length))]}同学又学习新知识了`
  }

  startAnimate = () => {
    const { currentText } = this.state
    const nextText = this.randomText()
    this.setState({
      beforeNext: true,
      currentText,
      nextText
    })

    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    p.then(() => {
      this.setState({
        beforeNext: false,
        currentText: nextText,
        nextText: ''
      })
    })
  }

  render() {
    const { currentText, nextText, beforeNext } = this.state
    return (
      <div className='marquee'>
        <p className={classnames('text', { 'before-appear': beforeNext })}>
          {currentText}
          <br />
          {nextText}
        </p>
      </div>
    )
  }
}