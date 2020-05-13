import React from 'react';

export default function ButtonComponent(props) {
  return(
    <button className="primary-btn">
      <a href={ props.href }>
        { props.text }
      </a>
    </button>
  )
}
