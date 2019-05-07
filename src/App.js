import React, { Component } from 'react';
import './App.css';
import './Toast/index.css'
import Marquee from './Marquee';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import MarqueeLine from './MarqueeLine';
import Modal from './Modal';
import Process from './Process';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleCancel = () => {
    console.log('Cancel')
    this.setState({
      visible: false
    })
  }

  handleComfirm = () => {
    console.log('Comfirm')
    //数据处理...
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <div className='item'>
          <div className='label'>跑马灯：</div>
          <Marquee />
        </div>
        <div className='item'>
          <div className='label'>RadioButton：</div>
          <RadioButton options={[{ label: 'Vue', value: 'vue' }, { label: 'React', value: 'react' }, { label: 'Angular', value: 'angular' }, { label: 'Webpack', value: 'webpack' }]} />
        </div>
        <div className='item'>
          <div className='label'>CheckBox：</div>
          <CheckBox options={[{ label: 'Vue', value: 'vue' }, { label: 'React', value: 'react' }, { label: 'Angular', value: 'angular' }, { label: 'Webpack', value: 'webpack' }, { label: 'Nodejs', value: 'nodejs' }, { label: 'ES6', value: 'es6' }]} maxLength='3' />
        </div>
        <div className='item'>
          <div className='label'>横向跑马灯：</div>
          <MarqueeLine detail='陌生的人 空港的雨还在下 今夜的你要去向哪儿 陌生的城 大雨将你吞下 滴答滴答我们一起唱' />
        </div>
        <div className='item'>
          <div className='label' onClick={this.showModal}>点我查看，模态框：</div>
          <Modal visible={visible}
            title='这是标题'
            detail='这里是内容'
            cancelText='取消'
            comfirmText='确定'
            onCancel={this.handleCancel}
            onComfirm={this.handleComfirm}
          />
        </div>
        <div className='item'>
          <div className='label'>进度条：</div>
          <Process process='50' showInfo='true' action='true' />
        </div>
      </div>
    );
  }
}

export default App;
