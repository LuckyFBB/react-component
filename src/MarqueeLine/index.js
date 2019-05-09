import React from 'react';
import './index.less';

export default function MarqueeLine(props) {
  return (
    <div className='marquee-line'>
      <div className='text'>{props.detail}</div>
    </div>
  )
}