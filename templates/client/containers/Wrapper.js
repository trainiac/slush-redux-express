import React, { PropTypes } from 'react'

export function Wrapper(props) {

  return (
    <div id='appWrapper'>
      {props.children}
    </div>
  )

}

Wrapper.propTypes = {
  children: PropTypes.node
}
