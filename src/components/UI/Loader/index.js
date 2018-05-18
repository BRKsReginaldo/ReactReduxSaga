import React from 'react'

const Loader = ({width, height}) => (
  <div className="loader" style={{width: `${width}px`, height: `${height || width}px`}}/>
)

Loader.defaultProps = {
  width: 100,
}

export default Loader