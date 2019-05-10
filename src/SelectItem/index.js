import React from 'react'
import './index.less'

export default function SelectItem(props) {
  const { label, options, onCancel, onSelect } = props
  return (
    <div className='fixedUl'>
      {label && <div className='choice__item choice__item--label'>{label}</div>}
      <div className='choice'>
        {
          options.map(item => {
            return <div className='choice__item' key={item.value} onClick={() => onSelect(item)}>{item.label}</div>
          })
        }
      </div>
      <div className='choice__item choice__item--cancel' onClick={onCancel}>取消</div>
    </div>
  )
}