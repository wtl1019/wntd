import React, { FC } from 'react'


const Button: FC<any> = (props) => {
  return (
    <button>111</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
