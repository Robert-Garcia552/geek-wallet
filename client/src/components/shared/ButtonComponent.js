import React from 'react';
import '../../styles/index.scss'

export default function ButtonComponent(props) {
  return(
    <button className="primary-btn">
      <a href="google.com">{ props.btnText }</a>
    </button>
  )
}
