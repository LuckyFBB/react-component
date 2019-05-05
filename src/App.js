import React from 'react';
import './App.css';
import './Toast/index.css'
import Marquee from './Marquee';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import MarqueeLine from './MarqueeLine';
import Mask from './Mask';

function App() {
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
        <MarqueeLine  detail='陌生的人 空港的雨还在下 今夜的你要去向哪儿 陌生的城 大雨将你吞下 滴答滴答我们一起唱'/>
      </div>
    </div>
  );
}

export default App;
