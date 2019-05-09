import React from 'react'
import Mask from '../Mask';
import close from './close.png'
import './index.less'

export default function Modal(props) {
  const { visible, title, detail, cancelText, comfirmText } = props

  const handleCancel = () => {
    props.onCancel()
  }
  
  const handleConfirm = () => {
    props.onComfirm()
  }
  
  return (
    <React.Fragment>
      {visible &&
        <div className='modal'>
          <div className='modal--container'>
            <div className='modal--header'>
              <span>{title}</span>
              <img src={close} alt='close' onClick={handleCancel} />
            </div>
            <div className='modal--body'>{detail}</div>
            <div className='modal--footer'>
              <div className='modal--button modal--button__cancel' onClick={handleCancel}>{cancelText}</div>
              <div className='modal--button modal--button__comfirm' onClick={handleConfirm}>{comfirmText}</div>
            </div>
          </div>
          <Mask />
        </div>}
    </React.Fragment>
  )
}