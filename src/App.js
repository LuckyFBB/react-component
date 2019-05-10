import React, { Component } from 'react';
import './App.css';
import Marquee from './Marquee';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import MarqueeLine from './MarqueeLine';
import Modal from './Modal';
import DropSelect from './DropSelect'
import Process from './Process';
import LinkageSelect from './LinkageSelect';

const PROVINCE = [
  { label: '浙江省', value: 'ZHENGJIANG' }, 
  { label: '重庆市', value: 'CHONGQING' }, 
  { label: '安徽省', value: 'ANHUI' }
]
const CITY = {
  'ZHENGJIANG': [
    { label: '杭州市', value: 'HANGZHOU' }, 
    { label: '湖州市', value: 'HUZHOU' }, 
    { label: '绍兴市', value: 'SHAOXING' }, 
    { label: '金华市', value: 'JINHUA' }, 
    { label: '宁波市', value: 'NINGBO' }
  ],
  'CHONGQING': [
    { label: '重庆市辖区', value: 'XIAQU' }, 
    { label: '重庆市区县', value: 'QUXIAN' }
  ],
  'ANHUI': [
    { label: '合肥市', value: 'HEFEI' }, 
    { label: '芜湖市', value: 'WUHU' }
  ]
}

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
          <Process type='circle' process='79' showInfo='true' action='true' />
        </div>
        <div className='item'>
          <div className='label'>下拉框：</div>
          <DropSelect label='城市' options={[{ value: 'HANGZHOU', label: '杭州' }, { value: 'SHANGHAI', label: '上海' }, { value: 'CHONGQING', label: '重庆' }]} />
        </div>
        <div className='item'>
          <div className='label'>联动框：</div>
          <LinkageSelect parent={PROVINCE} child={CITY} />
        </div>
      </div>
    );
  }
}

export default App;
