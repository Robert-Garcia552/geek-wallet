import React from 'react';

export default function ButtonComponent(props) {
  return(
    <button className="primary-btn">
      <a href="google.com">{ props.btnText }</a>
    </button>
  )
}
