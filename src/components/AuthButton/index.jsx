import React from 'react'
import PropTypes from 'prop-types'

const AuthBtn = (props) => {
  const { className, text,  type } = props
  return (
    <div className={`w-full mt-5`}>
      <button
        type={type ? type : 'button'}
        onClick={props.onClick ? () => props.onClick() : null}
        className={className}
      >
        <span> {text} </span>
      </button>
    </div>
  )
}

AuthBtn.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}
export default AuthBtn
